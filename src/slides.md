---
title: Rive アニメーションとアクセシビリティ
theme: ./
defaults:
layout: cover
hideInToc: true
---

# Rive アニメーションとアクセシビリティ

## デモンストレーションを添えて

---
layout: default
---

# 自己紹介

<div class="flex justify-between items-center">
  <div class="flex-1">
    <div class="text-3xl mb-4">
      浅原昌大(あさはら まさひろ)
    </div>
    <div class="text-2xl mb-8">
      株式会社サイバーエージェント
    </div>

   - X: [@assa1605](https://x.com/assa1605)
   - Github: [@assa1605](https://github.com/assa1605)
    
  </div>

  <div class="flex-1 flex justify-center">
    <img src="https://github.com/assa1605.png" class="w-80 rounded-lg"/>
  </div>
</div>

<!-- 
# アジェンダ

<Toc maxDepth="1"/> -->

---
layout: default
---

# Riveとは？

- インタラクティブなアニメーションを作成・実装するためのツール
- クロスプラットフォーム対応
    - React, Vue, Angular, React Native, Flutter, iOS, Android, C#

<div class="flex justify-center">
    <img src="/assets/slides/dragon.gif" class="w-80"/>
</div>

<div class="text-sm text-center italic">
  引用：<a href="https://rive.app/">https://rive.app/</a>
</div>

---

# Rive アニメーション活用例

<div class="pt-16">
  <div class="flex flex-row gap-8 justify-center">
    <div class="flex flex-col items-center gap-2">
      <div class="text-lg font-medium">Like</div>
      <LikeRiveAnimation />
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="text-lg font-medium">Rating</div>
      <StarsRiveAnimation />
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="text-lg font-medium">404</div>
      <EmptyRiveAnimation />
    </div>
  </div>
</div>

<div class="flex justify-center mt-20">
  <div class="text-sm text-gray-500 italic" >
    素材元：<a href="https://github.com/lllttt06/ca_flutter_slide" target="_blank" rel="noopener">github.com/lllttt06/ca_flutter_slide</a>
  </div>
</div>

<div class="absolute bottom-12 right-8">
  <img src="/assets/slides/qr.png" class="w-32"/>
</div>

---
layout: two-cols
---
## Riveのメリット

- 複雑なアニメーションの作成が簡単(プログラミング不要)
- 作ったアニメーションをGUI上ですぐに確認
- Lottie と比べてファイルサイズが圧倒的に軽い
  - [rive-as-a-lottie-alternative](https://rive.app/blog/rive-as-a-lottie-alternative)

::right::

<div class="flex flex-col justify-center h-full">
    <div class="flex justify-end">
        <img src="/assets/slides/dog.gif" class="w-128"/>
    </div>
    <div class="mt-4 text-sm text-center">
     Riveのツール上でアニメーションを実行している様子
    </div>
</div>


---
layout: cover
hideInToc: true
---

# `アクセシビリティ`への考慮
## WCAGの達成基準とセットで紹介

---
layout: default
---
## ARIA live regions のコントロール

### WCAGの達成基準

> 達成基準 4.1.3: ステータスメッセージを理解する

- **Rive 公式による実装例**
    - [Accesible web animations: ARIA live regions](https://rive.app/blog/accesible-web-animations-aria-live-regions)
    - 動的コンテンツの変更を支援技術に通知
    - スクリーンリーダーユーザーへのアニメーション説明



---
layout: default
---
## prefers-reduced-motion を活用したアニメーションの制御

### WCAGの達成基準

> 達成基準 2.2.2 一時停止、停止、非表示


> 達成基準 2.3.3 インタラクションによるアニメーション


### prefers-reduced-motion とは
ユーザーの環境設定によって余計な動きを抑制することを要求したことを検出するメディアクエリ。アニメーションを何らかの方法で無効にできることを達成するために使用。



---

## prefers-reduced-motion の使い方

`no-preference` : ユーザーがアニメーションを無効にする設定をしていない場合

`reduce` ：ユーザーがアニメーションを無効にする設定をしている場合

**prefers-reduced-motionの設定を検出する hooks**

```ts
import { useEffect, useState } from "react";
export const usePrefersReducedMotion = () => {
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  return isPrefersReducedMotion;
};

```
---

## Rive ファイルに対して適用

**アニメーションを発火しない設定**

```ts
　import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
  const isPrefersReducedMotion = usePrefersReducedMotion();

  const { rive, RiveComponent: RiveLikeComponent } = useRive({
    src: likeRivUrl,
    stateMachines: riveValue.like.stateMachine,
    autoplay: false,
  });

  const stateMachineInputAnimation = useStateMachineInput(
    rive,
    riveValue.like.stateMachine,
    riveValue.like.inputName.animation,
    !isPrefersReducedMotion, // ←これ
  );
```

---

## 実際に体験してみよう！

- iOS：設定 > アクセシビリティ > 動作 > 視覚効果を減らす
- Android：設定 > ユーザー補助 > 表示 > アニメーションを無効にする

<div class="text-sm font-bold text-red-500">↑の設定が終わったら、このスライドを再度読み込みしてみてください</div>


読み込み時に犬の尻尾が自動で動くように設定しています

<div class="flex justify-center mt-2 gap-12">
  <div class="flex flex-col items-center gap-4">
    <div class="text-xl font-medium">対応なし</div>
        <NoReducedMotionRiveAnimation />
  </div>

  <div class="flex flex-col items-center gap-4">
    <div class="text-xl font-medium">prefers-reduced-motion に対応</div>
        <ReducedMotionRiveAnimation />
  </div>
</div>

<div class="absolute bottom-12 right-8">
  <img src="/assets/slides/qr-demo.png" class="w-32"/>
</div>


---
layout: center
---

# ご清聴ありがとうございました 🙌

- 👉 スライド: https://ca-a11y-lt.vercel.app
- 📦 リポジトリ: https://github.com/assa1605/ca-a11y-lt


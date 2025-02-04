---
title: PYRA 4 Introduction
theme: ./
defaults:
    subtitle: Slidev Template | Professorship of Environmental Sensing and Modeling (ESM)
    tumLogo: blue
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

---

# アジェンダ

<Toc maxDepth="2"/>

---
layout: default
---

# Riveとは？

- インタラクティブなアニメーションを作成・実装するためのツール
- クロスプラットフォーム対応
    - React, Vue, Angular、React Native, Flutter, iOS, Android, C#

<div class="flex justify-center">
    <img src="/assets/slides/dragon.gif" class="w-80"/>
</div>



---
layout: two-cols
---
## Riveのメリット👏

- 複雑なアニメーションの作成が簡単(プログラミング不要)
- 作ったアニメーションをGUI上ですぐに確認
- Lottie と比べても圧倒的に軽い
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
layout: default
---

# アクセシビリティの考慮

## Rive 公式による実装例

- **ARIA live regions のコントロール**
    - 動的コンテンツの変更を支援技術に通知
    - スクリーンリーダーユーザーへのアニメーション説明

## prefers-reduced-motionの活用

- ユーザーの設定に応じてアニメーションを調整
- 動きによる不快感を軽減
- OS設定との連携
    - Windows 10：設定 > 簡単操作 > ディスプレイ
    - macOS：システム設定 > アクセシビリティ > 表示
    - iOS：設定 > アクセシビリティ > 視覚効果を減らす
    - Android：設定 > ユーザー補助 > アニメーション

---

# Rive について

-   `default`
-   `cover`
-   `text-image-split`
-   `two-cols`
-   `center`

---

## Layout `default`

Eu mollit nulla voluptate dolore dolore tempor velit aliqua cillum irure quis ea. Aute laboris sit quis aliquip tempor elit adipisicing duis in sint sit eiusmod exercitation consectetur. Ut deserunt qui veniam dolore sint excepteur. Occaecat minim ea eu esse enim deserunt veniam ad ullamco nostrud est.

---
layout: cover
hideInToc: true
---

# Layout `cover` (Primary Heading)

## Secondary Heading

---
layout: text-image-split
---

## Layout `text-image-split`

Anim elit reprehenderit sunt occaecat ut et enim consequat exercitation do excepteur. Deserunt esse ipsum exercitation in Lorem sunt culpa cillum officia. Aute sit commodo ex ullamco consequat aute et cupidatat excepteur. Duis labore et est eu exercitation aliquip.

Aute voluptate consectetur cillum nulla aliqua incididunt non est sunt aliqua ut consectetur do. Sint quis amet est ex ea enim laborum culpa consequat nostrud labore. Enim laboris aliqua excepteur eiusmod officia exercitation fugiat et. Nostrud fugiat sint amet veniam reprehenderit ex deserunt officia tempor esse aliqua sint dolore laboris. Consectetur cupidatat et irure cupidatat.

::right::

<img src="https://images.unsplash.com/photo-1612334001559-947862cc2202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" style="width: 300px; border-radius: 0.5rem;"/>

---

layout: two-cols
---

## Layout `two-cols`

Mollit amet mollit et aliquip tempor ipsum enim ad et adipisicing exercitation magna. Ullamco commodo laboris nostrud quis sit est laborum Lorem irure sint enim exercitation exercitation. Culpa consectetur nulla non ipsum. Enim magna adipisicing et velit dolore reprehenderit aliquip do Lorem id officia. Mollit sint nisi nulla sunt dolore voluptate sint ipsum sit. Mollit magna esse cupidatat qui laborum veniam ipsum ex dolor.

::right::

Adipisicing Lorem et quis magna consequat ut irure tempor eu dolor nisi. Do irure in cupidatat laborum occaecat officia non nisi non amet mollit duis ullamco. Duis amet velit sint consectetur. Fugiat magna cillum cillum do voluptate. Dolore fugiat voluptate veniam sint dolor anim.

Sunt ex ut ad nisi laboris veniam qui fugiat ex. Labore quis ipsum pariatur incididunt ad qui Lorem ipsum est minim labore ipsum dolore labore. Proident aliqua fugiat ex consectetur ullamco anim aliquip nostrud in in veniam reprehenderit ad.

---

# Markdown Examples

-   headings
-   text formatting
-   math
-   icons
-   code blocks
-   tables
-   lists
-   quotes


---

## Text Formatting

Adipisicing **bold text** officia ea. Reprehenderit reprehenderit voluptate occaecat do _italic text_. Quis nisi qui reprehenderit <span class="text-green-700 bg-green-100 px-1 rounded font-semibold">consectetur incididunt officia</span> anim pariatur exercitation. <span class="text-red-700 bg-red-100 px-1 rounded font-semibold">Ipsum quit</span> veniam mollit dolore aliqua officia.

You can also use subscript (O<sub>2</sub>) or superscript (x<sup>2</sup>).

---


## Code Blocks

<br/>

**prefers-reduced-motionの設定を:**

```ts
"use client";

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



## Lists

**Ordered lists:**

1. a
2. bc
3. def

<br/>

**Unordered lists:**

-   ghij
-   klmno
-   pqrstu

---

## Quotes

> Nulla cillum pariatur cillum velit nisi incididunt proident nostrud.

Pariatur quis nisi et incididunt id ea labore adipisicing dolore pariatur Lorem ut aute. Velit deserunt dolore ullamco enim. Magna laborum nostrud nulla eiusmod nisi quis ad duis elit. Qui dolore enim occaecat anim mollit elit elit incididunt aliqua. Magna elit adipisicing nisi nisi ad tempor dolore tempor veniam deserunt consectetur nisi. Duis nulla deserunt laboris veniam ullamco.

> Irure officia cillum consectetur elit duis ex quis laboris.

Eu amet non ad mollit dolore culpa laborum sunt eiusmod amet ipsum sit elit. Enim consectetur nostrud sunt id ad minim proident do nulla ullamco eu. Sint sunt cillum eu dolore nisi consequat id. Pariatur dolore nostrud voluptate fugiat enim veniam veniam. Nisi qui sint in minim aliqua sunt dolore qui et veniam quis dolor consequat. Pariatur laboris cupidatat aliqua ipsum sunt exercitation dolor.


This is a demo presentation containing the features of our template for [**Slidev**](https://sli.dev/). Slidev is a markdown presentation tool - a mixture of PowerPoint and Latex - write your presentation in a plain text file using markdown syntax and the PDF will be rendered by Slidev. You don't have to worry about formatting and can focus on the content. Your presentations will look consistent and simple.

<br/>

**How to get started:**

1. Read the Slidev intro: https://sli.dev/guide/
2. Get familiar with the file structure: https://sli.dev/guide/syntax.html
3. Look into the demo document: [Markdown file](https://github.com/dostuffthatmatters/pyra-4-presentation/blob/main/docs/slides.example.md?plain=1) | [PDF](https://github.com/dostuffthatmatters/pyra-4-presentation/blob/main/docs/slides.example.pdf).
4. Create your own presentation by cloning or forking [this template repository](https://github.com/tum-esm/tum-esm-slidev-template)

<br/>

If you have **issues, comments, or ideas for this template**, please create an issue [here](https://github.com/tum-esm/tum-esm-slidev-template/issues).



---

# Rive アニメーション

<div class="pt-24">
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



---
layout: center
---

# ご清聴ありがとうございました

アクセシビリティに配慮したアニメーションで、
より良いユーザー体験を提供しましょう

---
<template>
  <div class="rive-container" @click="handleClick">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { Rive } from "@rive-app/canvas";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const canvas = ref(null);
const riveInstance = shallowRef(null);
const currentRating = ref(0);

const playAnimation = (rating) => {
  if (!riveInstance.value) return;

  const animationName = rating === 0 ? "Idle_empty" : `${rating}_stars`;
  riveInstance.value.play(animationName);
  currentRating.value = rating;
};

const handleClick = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;

  // 星の位置に基づいて評価を計算（1-5）
  const rating = Math.ceil((x / width) * 5);

  // 同じ星をクリックした場合は0に戻す
  if (rating === currentRating.value) {
    playAnimation(0);
  } else {
    playAnimation(rating);
  }
};

const createRive = () => {
  const r = new Rive({
    src: "/assets/rive/stars.riv",
    canvas: canvas.value,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    }),
    autoplay: false
  });

  riveInstance.value = r;
};

onMounted(() => {
  createRive();
  playAnimation(0);
});
</script>

<style scoped>
.rive-container {
  width: 100%;
  height: auto;
  cursor: pointer;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

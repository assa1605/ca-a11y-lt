<template>
  <div class="rive-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { Rive } from "@rive-app/canvas";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const canvas = ref(null);
const riveInstance = shallowRef(null);

const createRive = (prefersReducedMotion) => {
  const r = new Rive({
    src: "/assets/rive/dog.riv",
    canvas: canvas.value,
    autoplay: !prefersReducedMotion, // reduced-motionが有効な場合はアニメーションを無効化
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    })
  });

  riveInstance.value = r;
};

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  createRive(prefersReducedMotion);
});
</script>

<style scoped>
.rive-container {
  width: 300px;
  height: auto;
}

canvas {
  width: 100%;
  height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .rive-container {
    animation: none;
  }
}
</style>

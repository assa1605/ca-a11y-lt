<template>
  <div class="rive-container" @click="playAnimation('Pressed')">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { Rive } from "@rive-app/canvas";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const canvas = ref(null);
const riveInstance = shallowRef(null);

const triggerAnimation = () => {
  if (riveInstance.value) {
    riveInstance.value.play("Pressed");
  }
};

const playAnimation = (animationName) => {
  if (!riveInstance.value) {
    return;
  }
  riveInstance.value.play(animationName);
};

const createRive = () => {
  const r = new Rive({
    src: "/assets/rive/like.riv",
    canvas: canvas.value,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    })
  });

  riveInstance.value = r;
};

onMounted(() => {
  createRive();
  triggerAnimation();
});
</script>

<style scoped>
.rive-container {
  width: 100%;
  height: auto;
  cursor: pointer;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

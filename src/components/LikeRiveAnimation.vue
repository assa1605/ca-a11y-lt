<template>
  <div
    class="rive-container"
    @click="playAnimation('Pressed')"
  >
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { Rive } from "@rive-app/canvas";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const canvas = ref(null);
const riveInstance = shallowRef(null);

const playAnimation = (animationName) => {
  if (riveInstance.value) {
    riveInstance.value.play(animationName);
  }
};

onMounted(() => {
  const r = new Rive({
    src: "/assets/rive/like.riv",
    canvas: canvas.value,
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    })
  });

  riveInstance.value = r;
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

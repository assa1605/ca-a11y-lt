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

onMounted(() => {
  const r = new Rive({
    src: "/assets/rive/empty.riv",
    canvas: canvas.value,
    autoplay: true,
    animations: "Animation 1",
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
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

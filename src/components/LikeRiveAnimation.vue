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

const playAnimation = (animationName) => {
  if (riveInstance.value) {
    riveInstance.value.play(animationName);
  }
};

onMounted(() => {
  setTimeout(async () => {
    const r = new Rive({
      src: "/assets/rive/like.riv",
      canvas: canvas.value,
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center
      })
    });

    riveInstance.value = r;
  }, 100); //HACK: 初期ロードで表示されないので、100msの遅延を入れる
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

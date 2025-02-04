<template>
  <div
    class="rive-container"
    @click="playAnimation('Pressed')"
    @mouseenter="playAnimation('Hover')"
    @mouseleave="playAnimation('Idle')"
  >
    <canvas ref="canvas"></canvas>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { Rive } from "@rive-app/canvas";
import { Layout, Fit, Alignment } from "@rive-app/canvas";

const canvas = ref(null);
const riveInstance = shallowRef(null);
const error = ref(null);

const playAnimation = (animationName) => {
  if (riveInstance.value) {
    try {
      riveInstance.value.play(animationName);
    } catch (e) {
      console.error(`Failed to play animation ${animationName}:`, e);
      error.value = `アニメーションの再生に失敗しました: ${e.message}`;
    }
  }
};

onMounted(() => {
  try {
    console.log("Initializing Rive animation...");
    const r = new Rive({
      src: "/assets/rive/like.riv",
      canvas: canvas.value,
      stateMachines: "State Machine 1",
      autoplay: true,
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center
      }),
      onLoad: () => {
        console.log("Rive file loaded successfully");
        error.value = null;
      },
      onLoadError: (err) => {
        console.error("Failed to load Rive file:", err);
        error.value = `Riveファイルの読み込みに失敗しました: ${
          err.message || "ファイルが見つかりません"
        }`;
      }
    });

    riveInstance.value = r;
  } catch (e) {
    console.error("Failed to initialize Rive:", e);
    error.value = `Riveの初期化に失敗しました: ${e.message}`;
  }
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

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
}
</style>

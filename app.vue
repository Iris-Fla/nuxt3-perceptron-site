<script setup lang="ts">
import type { TransitionProps } from "vue";
const { $gsap: gsap } = useNuxtApp();

const tl: gsap.core.Timeline = gsap.timeline()
const transition: TransitionProps = {
  name: 'page',
  mode: 'out-in',
  onEnter: (el, done) => {
    tl.to('.js-mask', { left: '200vw',duration: 1.5,opacity: 0})
    done()
  },
  onBeforeLeave: (el) => {
    tl.set('.js-mask', { left: '-100vw',opacity: 0})
  },
  onLeave: (el, done) => {
    tl.to('.js-mask', {
      left: 0,
      opacity: 1,
      duration: 0.5,
    })
    done()
  },
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage :transition="transition" />
    <div class="overlay js-mask">
      <div class="text">読み込み中なのだ！</div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
$transition-mask-color: rgb(92, 153, 161);
.overlay {
  position: fixed;
  top: 0;
  left: -200vw;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: $transition-mask-color;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
  }
  &:before {
    right: 100vw;
    background: linear-gradient(
      to bottom left,
      $transition-mask-color 50%,
      transparent 50%
    );
  }
  &:after {
    left: 100vw;
    background: linear-gradient(
      to top right,
      $transition-mask-color 50%,
      transparent 50%
    );
  }
}
.text {
  z-index: 10000;
  font-size: 3em;
  color: #ffffff;
}
</style>

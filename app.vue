<template>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}



</style>

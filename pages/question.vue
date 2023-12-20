<script setup lang="ts">
const userData = useData();
</script>
<template>
  <Card>
    <div v-for="items in userData.dataList" :key="items.id">
      <CardHeader>{{ userData.titleData }}</CardHeader>
      <CardText>{{ items.title }}</CardText>
    </div>
  </Card>
</template>

<script setup lang="ts">
const userData = useData();
</script>
<template>
  <Container>
    <Card>
      <div v-for="items in userData.dataList" :key="items.id">
        <CardText>{{ items.title }}</CardText>
      </div>
    </Card>
  </Container>
</template>

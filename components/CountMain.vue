<template>
    <div>
        <p>{{ count }}</p>
    </div>
    <button @click="increment" :disabled="count >= 10">Count</button>
    <button @click="decrement" :disabled="count <= 0">Count</button>
</template>
<script setup lang="ts">
let count = ref(0)
const increment = () => {
    if (count.value < 10) {
        count.value++
    }
}
const decrement = () => {
    if (count.value > 0) {
        count.value--
    }
}
</script>
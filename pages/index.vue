<script setup lang="ts">
import { QuestionTitle,WeightData,BiasData } from '@/composables/Count'
const Qtitle = QuestionTitle()
const Wdata = WeightData()
const Bdata = BiasData()

</script>
<template>
    <Container>
        <h1>にゃーん...</h1>
        <h2>{{ Qtitle.one }}</h2>
    </Container>
</template>
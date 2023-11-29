<script setup lang="ts">
import { PlayerData,TitleData,BiasData } from '@/composables/Count'
const Pdata = PlayerData()
const Tdata = TitleData()

</script>
<template>
    <Container>
        <h1>にゃーん...</h1>
        <h2>{{ Tdata }}</h2>
        <h2>{{ Pdata.Datalist[1].title }}</h2>
        <CountMain />
    </Container>
</template>
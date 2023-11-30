<script setup lang="ts">
import { PlayerData, TitleData, BiasData } from '@/composables/Count'
const Pdata = PlayerData()
const Tdata = TitleData()

const DeleteData = (DD:number) => {

}

</script>
<template>
    <Container>
        <h1>にゃーん...</h1>
        <h2>{{ Tdata }}</h2>
        <h2>{{ Pdata.Datalist[1].title }}</h2>
        <Alert theme="primary" v-for="list in Pdata.Datalist" :key="list.id">
            <Row align-items="center">
                <Col col="10">
                <BInputGroup>
                    <BInputGroupText id="BInputGroup-sizing-lg">
                        タイトル
                    </BInputGroupText>
                    <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="list.title"/>
                    <BInputGroupText>重み</BInputGroupText>
                    <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" v-model="list.weight"/>
                </BInputGroup>
                </Col>
                <Col col="2">
                <b-button button="primary" @click="DeleteData(list.id)">
                    削除
                </b-button>
                </Col>
            </Row>
        </Alert>
    </Container>
</template>
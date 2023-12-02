<script setup lang="ts">
import { PlayerData, TitleData, BiasData } from "@/composables/Count";
const Pdata = PlayerData();
const Tdata = TitleData();
const Bdata = BiasData();

const DeleteTaskData = (title: string, weight: number) => {
  Pdata.value.Datalist = Pdata.value.Datalist.filter(
    (item) => item.title !== title || item.weight !== weight
  );
};

</script>
<template>
  <Container>
    <h1>にゃーん...お</h1>
    <h2>{{ Tdata }}</h2>
    <Alert theme="primary" v-for="list in Pdata.Datalist" :key="list.title">
      <Row align-items="center">
        <Col col="11">
          <BInputGroup>
            <BInputGroupText id="BInputGroup-sizing-lg">
              タイトル
            </BInputGroupText>
            <BFormInput
              type="text"
              placeholder="タイトルを入力"
              aria-label="Title"
              v-model="list.title"
            />
            <BInputGroupText>重み</BInputGroupText>
            <BFormInput
              type="text"
              placeholder="重みを入力"
              aria-label="Weight"
              v-model="list.weight"
            />
          </BInputGroup>
        </Col>
        <Col col="1">
          <b-button
            button="primary"
            @click="DeleteTaskData(list.title, list.weight)"
          >
            削除
          </b-button>
        </Col>
      </Row>
    </Alert>
  </Container>
</template>

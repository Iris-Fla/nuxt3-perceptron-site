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

const MakeTaskData = () => {
  Pdata.value.Datalist.push({
    title: "",
    weight: Number(),
  });
};

</script>
<template>
  <Container>
    <h1>{{ Pdata.Datalist[0].title }}</h1>
    <h2>{{ Tdata }}</h2>
    <transition-group tag="div" name="fade">
      <Alert theme="primary" v-for="list in Pdata.Datalist" :key="list.weight">
        <Row align-items="center">
          <Col col="11">
            <BInputGroup>
              <BInputGroupText
                id="BInputGroup
            "
              >
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
      <Alert>
      <Row align-items="center">
        <Col col="11">
          <BInputGroup>
            <BInputGroupText
              id="BInputGroup
            "
            >
              タイトル
            </BInputGroupText>
            <BFormInput
              type="text"
              placeholder="タイトルを入力"
              aria-label="Title"
              v-model="Tdata"
            />
            <BInputGroupText>バイアス</BInputGroupText>
            <BFormInput
              type="text"
              placeholder="バイアスを入力"
              aria-label="Weight"
              v-model="Bdata"
            />
          </BInputGroup>
        </Col>
        <Col col="1">
          <b-button
            button="primary"
            @click="MakeTaskData()"
          >
            追加
          </b-button>
        </Col>
      </Row>
    </Alert>
    </transition-group>
  </Container>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

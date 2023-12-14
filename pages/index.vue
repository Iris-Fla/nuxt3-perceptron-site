<script setup lang="ts">
//auto importされるので、importは不要(VScodeの参照元が出ないので表記)
import { ref } from "vue";
import { addData, titleData, biasData, defaultData } from "@/composables/userData";

const AddData = addData();
const TitleData = titleData();
const BiasData = biasData();
const DefaultData = defaultData();
const alertMessage = ref("");

const DeleteTaskData = (id: number) => {
  alertMessage.value = "";
  AddData.value.Datalist = AddData.value.Datalist.filter(
    (item: any) => item.id !== id
  );
};

const MakeTaskData = () => {
  if (AddData.value.Datalist.length >= 4) {
    alertMessage.value = "データの数は10個までです";
  } else {
    AddData.value.Datalist.push({
      id: Math.floor(Math.random() * 10000),
      title: "",
      weight: Number(),
    });
  }
};

</script>
<template>
  <Container>
    <h1>{{ DefaultData.title }}</h1>
    <h2>{{ TitleData }}</h2>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11" v-if="alertMessage">
      <Toast show>
        <ToastHeader>
          <b-img src="https://dummyimage.com/20x20/ff0015/ff0015" rounded margin="e-2" alt="Card image cap" />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <CloseButton dismiss="toast" />
        </ToastHeader>
        <ToastBody>{{ alertMessage }}</ToastBody>
      </Toast>
    </div>
    <Alert>
      <Row align-items="center">
        <Col col="11">
        <BInputGroup>
          <BInputGroupText id="BInputGroup
            ">
            タイトル
          </BInputGroupText>
          <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="TitleData" />
          <BInputGroupText>バイアス</BInputGroupText>
          <BFormInput type="text" placeholder="バイアスを入力" aria-label="Weight" v-model="BiasData" />
        </BInputGroup>
        </Col>
      </Row>
    </Alert>

    <Alert shadow theme="primary">
      <Row align-items="center">
        <Col col="11">
        <BInputGroup>
          <BInputGroupText id="BInputGroup
            ">
            タイトル
          </BInputGroupText>
          <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="DefaultData.title" />
          <BInputGroupText>重み</BInputGroupText>
          <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" v-model="DefaultData.weight" />
        </BInputGroup>
        </Col>
        <Col col="1">
        <b-button button="primary" @click="MakeTaskData()"> 追加 </b-button>
        </Col>
      </Row>
    </Alert>
    <transition-group name="fade">
      <Alert shadow theme="primary" v-for="list in AddData.Datalist" :key="list.id">
        <Row align-items="center">
          <Col col="11">
          <BInputGroup>
            <BInputGroupText id="BInputGroup
            ">
              タイトル
            </BInputGroupText>
            <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="list.id" />
            <BInputGroupText>重み</BInputGroupText>
            <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" v-model="list.weight" />
          </BInputGroup>
          </Col>
          <Col col="1">
          <b-button button="primary" @click="DeleteTaskData(list.id)">
            削除
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

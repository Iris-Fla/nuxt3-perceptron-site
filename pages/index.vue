<script setup lang="ts">
//auto importされるので、importは不要(VScodeの参照元が出ないので表記)
import { ref } from "vue";
import { useData } from "@/composables/userData";

const userData = ref(useData());

const alertMessage = ref("");

const DeleteTaskData = (id: number) => {
  alertMessage.value = "";
  userData.value.dataList = userData.value.dataList.filter(
    (item: any) => item.id !== id
  );
};

const MakeTaskData = () => {
  if (userData.value.dataList.length >= 4) {
    alertMessage.value = "showToast";
  } else {
    userData.value.dataList.push({
      id: maxId() + 1,
      title: "",
      weight: Number(),
    });
  }
};

const playQuestion = () => {};

// 現在のIDの最大値を取得
const maxId = () => {
  let maxId = 0;
  userData.value.dataList.forEach((item: any) => {
    if (maxId < item.id) {
      maxId = item.id;
    }
  });
  return maxId;
};

const showData = () => {
  console.log(userData.value.dataList);
};
</script>
<template>
  <Container>
    <h2>{{ userData.titleData }}</h2>
    <div
      class="position-fixed bottom-0 end-0 p-3"
      style="z-index: 11"
      v-if="alertMessage"
    >
      <useToast />
    </div>
    <Alert shadow theme="light">
      <BInputGroup>
        <BInputGroupText
          id="BInputGroup
            "
          class="d-none d-md-block"
        >
          タイトル
        </BInputGroupText>
        <BFormInput
          type="text"
          placeholder="タイトルを入力"
          aria-label="Title"
          v-model="userData.titleData"
        />
        <BInputGroupText class="d-none d-md-block">バイアス</BInputGroupText>
        <BFormInput
          type="text"
          placeholder="バイアスを入力"
          aria-label="Weight"
          v-model="userData.biasData"
        />
        <b-button button="success" @click="MakeTaskData()"
          ><BIcon icon="bi:plus-circle"></BIcon
        ></b-button>
      </BInputGroup>
    </Alert>
    <TransitionGroup name="fade" tag="div">
      <div v-for="list in userData.dataList" :key="list.id">
        <BInputGroup class="inputGroup">
          <BInputGroupText id="BInputGroup" class="d-none d-md-block">
            タイトル
          </BInputGroupText>
          <BFormInput
            type="text"
            placeholder="タイトルを入力"
            aria-label="Title"
            v-model="list.id"
          />
          <BInputGroupText class="d-none d-md-block">重み</BInputGroupText>
          <BFormInput
            type="text"
            placeholder="重みを入力"
            aria-label="Weight"
            v-model="list.weight"
          />
          <b-button button="danger" @click="DeleteTaskData(list.id)">
            消 <BIcon icon="bi:dash-circle" />
          </b-button>
        </BInputGroup>
      </div>
    </TransitionGroup>
    <!-- <transition-group name="fade">
      <Alert margin="s-5 e-5" class="alert-style" shadow theme="primary" v-for="list in userData.dataList" :key="list.id">
        <Row align-items="center">
          <Col col="10">
          <BInputGroup>
            <BInputGroupText id="BInputGroup" class="d-none d-md-block">
            タイトル
            </BInputGroupText>
            <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="list.id" />
            <BInputGroupText class="d-none d-md-block">重み</BInputGroupText>
            <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" v-model="list.weight" />
          </BInputGroup>
          </Col>
          <Col col="1">
          <b-button button="danger" @click="DeleteTaskData(list.id)">
            <BIcon icon="bi:dash-circle" />
          </b-button>
          </Col>
        </Row>
      </Alert>
    </transition-group> -->
    <b-button button="primary" @click="showData">実行す</b-button>
    <h1>たまざらし</h1>
  </Container>
</template>

<style scoped>
.inputGroup {
    padding: 20px;
    border: 10px;
    border-color: #4ea6d7;
    background-color: aqua;
}
.alert-style {
  border-radius: 20px;
  background-color: #4ea6d7;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50px, 0px);
}

.fade-leave-active {
  position: absolute;
}
</style>

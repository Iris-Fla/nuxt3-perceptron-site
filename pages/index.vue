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
    alertMessage.value = "データの数は10個までです。";
  } else {
    userData.value.dataList.push({
      id: maxId() + 1,
      title: "",
      weight: Number(),
    });
  }
};

const playQuestion = () => { 
  if (userData.value.dataList.length < 3) {
    alertMessage.value = "データの数は3個以上必要です。";
  } else {
    navigateTo("/question");
  }
};

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
    <h2>{{ userData.titleList[0].yesPower }}</h2>
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
    <Alert shadow theme="light">
      <BInputGroup>
        <BInputGroupText id="BInputGroup" class="d-none d-md-block">
          タイトル
        </BInputGroupText>
        <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" />
        <BInputGroupText class="d-none d-md-block">バイアス</BInputGroupText>
        <BFormInput type="text" placeholder="バイアスを入力" aria-label="Weight" v-model="userData.biasData" />
        <b-button button="success" @click="MakeTaskData()">
          <BIcon icon="bi:plus-circle"></BIcon>
        </b-button>
      </BInputGroup>
    </Alert>
    <TransitionGroup name="fade" tag="div">
      <div v-for="list in userData.dataList" :key="list.id">
        <BInputGroup shadow class="inputGroup" margin="b-4">
          <BInputGroupText id="BInputGroup" class="d-none d-md-block">
            タイトル
          </BInputGroupText>
          <BFormInput type="text" placeholder="タイトルを入力" aria-label="Title" v-model="list.id" />
          <BInputGroupText class="d-none d-md-block">重み</BInputGroupText>
          <BFormInput type="text" placeholder="重みを入力" aria-label="Weight" v-model="list.weight" />
          <b-button button="danger" @click="DeleteTaskData(list.id)">
            消
            <BIcon icon="bi:dash-circle" />
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
    <b-button button="primary" @click="playQuestion">実行す</b-button>
    <h1>たまざらし</h1>
  </Container>
</template>

<style scoped>
.inputGroup {
  border: solid 20px #4ea6d7;
  outline: rgb(156, 156, 156) 1px solid;
  border-radius: 10px;
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

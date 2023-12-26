<script setup lang="ts">
import "~/assets/css/default.css";

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
  } else if (userData.value.dataList.some(item => item.title.trim() === '')) {
    alertMessage.value = "タイトルが空白のデータが存在します。";
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
  <div class="defaultBackground">
    <Container>
      <h2>{{ userData.titleList[0].do }}</h2>
      <Alert shadow theme="light">
        <BInputGroup margin="b-2" size="lg">
          <BFormFloating>
            <BFormInput
              type="text"
              readonly
              disabled
              placeholder="だれが"
              aria-label="Name"
              v-model="userData.titleList[0].name"
            />
            <BFormLabel for="floatingInput">だれが?</BFormLabel>
          </BFormFloating>
          <BInputGroupText><b>が</b></BInputGroupText>
          <!-- <BFormFloating>
          <BFormInput
            type="text"
            placeholder="~を ~で ~に"
            aria-label="Weight"
            v-model="userData.titleList[0].where"
          />
          <BFormLabel for="floatingInput">何を,どこで,誰に</BFormLabel>
        </BFormFloating> -->
        </BInputGroup>
        <BInputGroup margin="b-2">
          <BFormInput
            type="text"
            placeholder="○○する"
            aria-label="Do"
            v-model="userData.titleList[0].do"
          />
          <BInputGroupText><b>または</b></BInputGroupText>
          <BFormInput
            margin="e-3"
            type="text"
            placeholder="○○しない"
            aria-label="Don't"
            v-model="userData.titleList[0].dont"
          />
          <BInputGroupText><b>バイアス</b></BInputGroupText>
          <BFormInput
            type="number"
            placeholder="バイアスを入力してください"
            aria-label="Don't"
            v-model="userData.titleList[0].dont"
          />
        </BInputGroup>
        <b-button
          margin="t-2"
          size="lg"
          button="success"
          @click="MakeTaskData()"
          class="w-100"
        >
          要素の追加<BIcon icon="bi:plus-circle" />
        </b-button>
      </Alert>
      <TransitionGroup name="fade" tag="div">
        <div v-for="list in userData.dataList" :key="list.id">
          <BInputGroup shadow class="inputGroup" margin="b-4">
            <BFormFloating>
              <BFormInput
                type="text"
                placeholder="何をする?"
                aria-label="Title"
                v-model="list.title"
              />
              <BFormLabel for="floatingInput">何をする?</BFormLabel>
            </BFormFloating>
            <BFormFloating>
              <BFormInput
                type="number"
                placeholder="重み(数字)"
                aria-label="Weight"
                v-model="list.weight"
              />
              <BFormLabel for="floatingInput">重み(数字)</BFormLabel>
            </BFormFloating>
            <b-button button="danger" @click="DeleteTaskData(list.id)">
              さくじょ
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
      <div
        class="position-fixed bottom-0 end-0 p-3"
        style="z-index: 11"
        v-if="alertMessage"
      >
        <Toast show>
          <ToastHeader>
            <b-img
              src="https://dummyimage.com/20x20/ff0015/ff0015"
              rounded
              margin="e-2"
              alt="Card image cap"
            />
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <CloseButton dismiss="toast" />
          </ToastHeader>
          <ToastBody>{{ alertMessage }}</ToastBody>
        </Toast>
      </div>
    </Container>
  </div>
</template>

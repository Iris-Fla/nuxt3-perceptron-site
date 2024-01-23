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
  if (userData.value.dataList.length >= 10) {
    alertMessage.value = "データの数は10個までです。";
  } else {
    userData.value.dataList.push({
      id: maxId() + 1,
      title: "",
      weight: Number(),
      checked: false,
    });
  }
};

const playQuestion = () => {
  if (userData.value.dataList.length < 3) {
    alertMessage.value = "データの数は3個以上必要です。";
  } else if (userData.value.dataList.some((item) => item.title.trim() === "")) {
    alertMessage.value = "条件が空のデータが存在します。";
  } else if (userData.value.dataList.some((item) => item.weight == null)) {
    alertMessage.value = "重みが空のデータが存在します。";
  } else if (
    isNaN(userData.value.biasData) ||
    userData.value.titleList[0].do.trim() === ""
  ) {
    alertMessage.value = "タイトル欄に空のデータが存在します。";
  } else {
    checkedfalse();
    if (userData.value.debugMode === true) {
      navigateTo("/question");
    } else {
      navigateTo("/debug");
    }
  }
};
const checkedfalse = () => {
  userData.value.dataList.forEach((item: any) => {
    item.checked = false;
  });
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

const loadData = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse((e.target?.result as string) || "");
        if (data.dataList && data.titleList && data.biasData) {
          userData.value.dataList = data.dataList;
          userData.value.titleList = data.titleList;
          userData.value.biasData = data.biasData;
        } else {
          console.error("Invalid data structure");
        }
      } catch (error) {
        console.error("Invalid JSON format");
      }
    };
    reader.readAsText(file);
  }
};

const downloadData = () => {
  checkedfalse();
  const dataToDownload = {
    dataList: userData.value.dataList,
    titleList: userData.value.titleList,
    biasData: userData.value.biasData,
  };
  const dataStr = JSON.stringify(dataToDownload);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = userData.value.titleList[0].do + ".json";
  link.click();
  URL.revokeObjectURL(url);
};

const showData = () => {
  console.log(userData.value.dataList);
};
</script>
<template>
  <div class="defaultBackground">
    <Container>
      <header>
        <img class="center-image" src="/Header.png" alt="Logo" />
      </header>
      <b-a
          button="primary"
          class="w-30 basicButton basicShadow radius-button"
          href="/about"
          >パーセプトロンとは<BIcon margin="s-1" icon="bi:question-circle"
        /></b-a>
      <Alert theme="light" class="basicShadow">
        データの読み込み,データの保存
        <BInputGroup>
          <BFormFile id="BInputGroupFile01" @change="loadData" accept=".json" />
        </BInputGroup>
        <b-button
          button="primary"
          class="w-30 basicButton"
          @click="downloadData"
          >データを出力する<BIcon margin="s-1" icon="bi:file-earmark-arrow-up"
        /></b-button>
      </Alert>
      <img
        class="text-image"
        src="/text-1.png"
        alt="することとバイアスを入力するのだ"
      />
      <!-- <BInputGroup margin="b-2" size="lg">
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
        </BInputGroup> -->
      <BInputGroup margin="b-4" class="">
        <BInputGroupText><b>すること</b></BInputGroupText>
        <BFormInput
          type="text"
          placeholder="○○する"
          aria-label="Do"
          v-model="userData.titleList[0].do"
          margin="e-4"
        />
        <BInputGroupText><b>バイアス</b></BInputGroupText>
        <BFormInput
          type="number"
          placeholder="バイアスを入力してください"
          aria-label="Don't"
          v-model.number="userData.biasData"
        />
      </BInputGroup>
      <img
        class="text-image2"
        src="/text-2.png"
        alt="条件と重みを入力するのだ"
      />
      <b-button
        margin="b-4"
        size="lg"
        button="primary"
        @click="MakeTaskData()"
        class="w-100 basicButton"
      >
        条件の追加<BIcon icon="bi:plus-circle" />
      </b-button>
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
              <BFormLabel for="floatingInput">条件</BFormLabel>
            </BFormFloating>
            <BFormFloating>
              <BFormInput
                type="number"
                placeholder="重み(数字)"
                aria-label="Weight"
                v-model.number="list.weight"
              />
              <BFormLabel for="floatingInput">重み(数字)</BFormLabel>
            </BFormFloating>
            <b-button button="danger" @click="DeleteTaskData(list.id)">
              さくじょ
              <BIcon icon="bi:dash-circle" />
            </b-button>
          </BInputGroup>
        </div>
        <Alert theme="light" class="basicShadow">
          <BFormCheck switch>
            <BFormCheckLabel>遊びモード(○×ゲーム風になります)</BFormCheckLabel>
            <BFormCheckInput v-model="userData.debugMode" />
          </BFormCheck>
          <b-button
            button="primary"
            margin="t-2"
            class="w-100 basicButton"
            @click="playQuestion"
            >検証する～！</b-button
          >
        </Alert>
      </TransitionGroup>
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
            <strong class="me-auto">エラー</strong>
            <CloseButton dismiss="toast" />
          </ToastHeader>
          <ToastBody>{{ alertMessage }}</ToastBody>
        </Toast>
      </div>
    </Container>
  </div>
</template>

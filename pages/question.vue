<script setup lang="ts">
import "~/assets/css/default.css";

const userData = useData();

const countQuestion = ref(userData.value.dataList.length);

const nowQuestion = ref(0);

const ans = ref(0);

const showStatus = ref("default");

// 画像のアニメーション(フェード)
const animated_image = async () => {
  const img = document.querySelector(".animated_img");
  if (img) {
    img.classList.add("animated");
  }
  setTimeout(() => {
    if (img) {
      img.classList.remove("animated");
    }
  }, 800);
};
const reset = () => {
  animated_image();
  nowQuestion.value = 0;
  ans.value = 0;
  showStatus.value = "default";
};

const nextQuestion = async () => {
  ans.value += userData.value.dataList[nowQuestion.value].weight * 1;
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  animated_image();
  await new Promise((resolve) => setTimeout(resolve, 800));
  nowQuestion.value++;
};

const nextQuestionX = async () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  animated_image();
  await new Promise((resolve) => setTimeout(resolve, 800));
  nowQuestion.value++;
};

const backButton = async () => {
  if (nowQuestion.value === 0) {
    alert("これ以上戻れないのだ");
  } else {
    animated_image();
    await new Promise((resolve) => setTimeout(resolve, 800));
    nowQuestion.value--;
    ans.value -= userData.value.dataList[nowQuestion.value].weight * 1;
  }
};

const End = async () => {
  ans.value += userData.value.biasData;
  if (ans.value < 0) {
    userData.value.resulttext = userData.value.titleList[0].name + "は" + userData.value.titleList[0].do + "のはやめるらしいです";
  } else {
    userData.value.resulttext = userData.value.titleList[0].name + "は" + userData.value.titleList[0].do + "らしいです";
  }
  animated_image();
  showStatus.value = "end";
  await new Promise((resolve) => setTimeout(resolve, 800));

};

const downloadData = () => {
  const dataStr = JSON.stringify(userData.value.dataList);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'userData.json';
  link.click();
  URL.revokeObjectURL(url);
};

</script>
<template>
  <div class="questionBackground">
    <Container>
        <b-button class="bigButton" margin="3" button="primary" @click="downloadData">
            <BIcon icon="bi:circle" />
          </b-button>
      <div>でばっぐ {{ userData.debugMode }}</div>
      <div>今の問題 {{ nowQuestion }}</div>
      <div>問題数 {{ countQuestion }}</div>
      <div>問題数 {{ ans + userData.biasData }}</div>
      <Card class="questionCard text-center animated_img basicShadow" margin="4" v-if="(showStatus === 'default')">
        <Row justify-content="between">
          <Col col="auto">
          <b-a button="primary" href="/">
            <BIcon margin="e-1" icon="bi:wrench-adjustable" />作り直す
          </b-a>
          </Col>
          <Col col="auto">
          <ButtonGroup>
            <b-button button="success" @click="backButton">
              <BIcon margin="e-1" icon="bi:chevron-double-left" />一つ戻る
            </b-button>
            <b-button button="warning" @click="reset">
              <BIcon margin="e-1" icon="bi:arrow-counterclockwise" />やりなおす
            </b-button>
          </ButtonGroup>
          </Col>
        </Row>

        <CardText margin="t-3">進行状況:{{ nowQuestion }}/{{ countQuestion }}</CardText>
        <div class="progress-bar">
          <div class="progress-bar-item" v-for="(item, index) in userData.dataList" :key="index"
            :class="{ active: index < nowQuestion }"></div>
        </div>
        <Row>
          <Col>
          <p v-if="userData.debugMode">
            現在のスコア:{{ ans + userData.biasData }}
          </p>
          </Col>
          <Col>
          <p v-if="userData.debugMode">
            要素の影響度:{{ userData.dataList[nowQuestion].weight }}
          </p>
          </Col>
        </Row>
        <CardTitle margin="t-3">
          <h2>
            {{ userData.dataList[nowQuestion].title }} ?
          </h2>
        </CardTitle>
        <Row>
          <Col>
          <b-button class="bigButton" margin="3" button="primary" @click="nextQuestion">
            <BIcon icon="bi:circle" />
          </b-button>
          </Col>
          <Col>
          <b-button class="bigButton" margin="3" button="danger" @click="nextQuestionX">
            <BIcon icon="bi:x-circle" />
          </b-button>
          </Col>
        </Row>
      </Card>
      <Card class="questionCard text-center animated_img basicShadow" margin="4" v-if="(showStatus === 'end')">
        <h1>↓結果↓</h1>
        <h3>{{ userData.resulttext }}</h3>
        <Row>
          <Col col="6">
          <b-a button="primary" href="/">
            <BIcon margin="e-1" icon="bi:wrench-adjustable" />作り直す
          </b-a>
          </Col>
          <Col col="6">
          <ButtonGroup>
            <b-button button="warning" @click="reset">
              <BIcon icon="bi:circle" />もう一度
            </b-button>
          </ButtonGroup>
          </Col>
        </Row>
      </Card>
    </Container>
  </div>
</template>
<style scoped>
.progress-bar {
  display: flex;
  height: 20px;
  flex-direction: row;
  border-radius: 10px;
  margin: 0px 20px;
}

.progress-bar-item {
  flex: 1;
  background-color: #ddd;
  border-radius: 10px;
  margin: 0px 5px;
}

.progress-bar-item.active {
  background-color: #4caf50;
}

.animated_img {
  opacity: 1;
  transition: opacity 0.5s;
}

.animated_img.animated {
  opacity: 0;
}

.bigButton {
  width: 80%;
  /* ボタンの幅 */
  height: 100px;
  /* ボタンの高さ */
  font-size: 20px;
  /* テキストのサイズ */
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

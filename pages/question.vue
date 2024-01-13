<script setup lang="ts">
import "~/assets/css/default.css";

const userData = useData();

const countQuestion = ref(userData.value.dataList.length);

const nowQuestion = ref(0);

const ans = ref(0);

// 画像のアニメーション(フェード)
const animated_image = () => {
  const img = document.querySelector(".animated_img");
  img.classList.add("animated");
  setTimeout(() => {
    img.classList.remove("animated");
  }, 1000);
};

const showStatus = ref("default");

const nextQuestion = () => {
  ans.value += userData.value.dataList[nowQuestion.value].weight * 1;
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  animated_image();
  nowQuestion.value++;
};

const nextQuestionX = () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  animated_image();
  nowQuestion.value++;
};

const backButton = () => {
  if (nowQuestion.value === 0) {
    alert("これ以上戻れないのだ");
  } else {
    animated_image();
    nowQuestion.value--;
    ans.value -= userData.value.dataList[nowQuestion.value].weight * 1;
  }
};

const End = () => {
  alert("終了");
  ans.value += userData.value.biasData;
  if (ans.value < 0) {
    alert(
      userData.value.titleList[0].name +
        "は" +
        userData.value.titleList[0].do +
        "のはやめるらしいです"
    );
  } else {
    alert(
      userData.value.titleList[0].name +
        "は" +
        userData.value.titleList[0].do +
        "らしいです"
    );
  }
};
</script>
<template>
  <div class="questionBackground">
    <Container>
      <div>今の問題 {{ nowQuestion }}</div>
      <div>問題数 {{ countQuestion }}</div>
      <b-a button="primary" href="/"
        ><BIcon icon="bi:circle" />ホームに戻る</b-a
      >
      <b-button button="primary" @click="backButton"
        ><BIcon icon="bi:circle" />一つ戻る</b-button
      >
      <Card
        class="questionCard text-center animated_img basicShadow"
        margin="4"
        v-if="(showStatus = 'default')"
      >
      <CardText margin="t-3">進行状況:{{ nowQuestion }}/{{ countQuestion }}</CardText>
        <div class="progress-bar">
          <div
            class="progress-bar-item"
            v-for="(item, index) in userData.dataList"
            :key="index"
            :class="{ active: index < nowQuestion }"
          ></div>
        </div>
        <CardTitle margin="t-4"
          ><h2>
            ずんだもんは {{ userData.dataList[nowQuestion].title }} ?
          </h2></CardTitle
        >
        <Row>
          <Col>
            <b-button
              class="bigButton"
              margin="3"
              button="primary"
              @click="nextQuestion"
              ><BIcon icon="bi:circle"
            /></b-button>
          </Col>
          <Col>
            <b-button
              class="bigButton"
              margin="3"
              button="danger"
              @click="nextQuestionX"
              ><BIcon icon="bi:x-circle"
            /></b-button>
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
  margin:0px 20px;
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

.animated {
  animation: fadeInOut 1s infinite;

  will-change: transform;
}

.bigButton {
  width: 100px; /* ボタンの幅 */
  height: 50px; /* ボタンの高さ */
  font-size: 20px; /* テキストのサイズ */
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

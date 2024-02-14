<script setup lang="ts">

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
  }, 300);
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
  nowQuestion.value++;
  await new Promise((resolve) => setTimeout(resolve, 800));
};

const nextQuestionX = async () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  animated_image();
  nowQuestion.value++;
  await new Promise((resolve) => setTimeout(resolve, 800));
};

const backButton = async () => {
  if (nowQuestion.value === 0) {
    alert("これ以上戻れないのだ");
  } else {
    nowQuestion.value--;
    ans.value -= userData.value.dataList[nowQuestion.value].weight * 1;
    animated_image();
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
};

const End = async () => {
  ans.value += userData.value.biasData;
  if (ans.value < 0) {
    userData.value.resulttext =
      userData.value.titleList[0].do + "のはやめるのだ";
  } else {
    userData.value.resulttext = userData.value.titleList[0].do + "のだ";
  }
  showStatus.value = "loading";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  showStatus.value = "end";
};
</script>
<template>
  <div class="questionBackground">
    <Container>
      <Card
        class="questionCard text-center animated_img basicShadow center-card"
        v-if="showStatus === 'default'"
      >
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
                <BIcon
                  margin="e-1"
                  icon="bi:arrow-counterclockwise"
                />やりなおす
              </b-button>
            </ButtonGroup>
          </Col>
        </Row>

        <CardText margin="t-3"
          >進行状況:{{ nowQuestion }}/{{ countQuestion }}</CardText
        >
        <div class="progress-bar">
          <div
            class="progress-bar-item"
            v-for="(item, index) in userData.dataList"
            :key="index"
            :class="{ active: index < nowQuestion }"
          ></div>
        </div>
        <CardTitle margin="t-3">
          <h2 class="Mochi">{{ userData.dataList[nowQuestion].title }} ?</h2>
        </CardTitle>
        <Row>
          <Col>
            <b-button
              class="bigButton"
              margin="3"
              button="primary"
              @click="nextQuestion"
            >
              <BIcon icon="bi:circle" />
            </b-button>
          </Col>
          <Col>
            <b-button
              class="bigButton"
              margin="3"
              button="danger"
              @click="nextQuestionX"
            >
              <BIcon icon="bi:x-circle" />
            </b-button>
          </Col>
        </Row>
      </Card>
      <Transition name="card">
        <div v-if="showStatus === 'end'">
          <Card
            class="questionCard text-center animated_img basicShadow center-card"
            margin="4"
          >
            <h1>↓結果↓</h1>
            <h3 class="Mochi">{{ userData.resulttext }}</h3>
            <ButtonGroup>
              <b-a button="primary" href="/" margin="s-2 b-2">
                <BIcon margin="e-1" icon="bi:wrench-adjustable" />つくりなおす
              </b-a>
              <b-button margin="e-2 b-2" button="success" @click="reset">
                <BIcon icon="bi:arrow-counterclockwise" />
                やりなおす
              </b-button>
            </ButtonGroup>
          </Card>
        </div>
      </Transition>
      <Transition>
        <div v-if="showStatus === 'loading'" class="spinner-container">
          <Spinner text-color="light" margin="5"></Spinner>
        </div>
      </Transition>
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

.center-card {
  position: fixed;
  width: 50%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.animated_img {
  opacity: 1;
  transition: opacity 0.5s;
}

.animated_img.animated {
  opacity: 0;
  transition: opacity 0s;
}

.bigButton {
  width: 80%;
  /* ボタンの幅 */
  height: 100px;
  /* ボタンの高さ */
  font-size: 20px;
  /* テキストのサイズ */
}

.card-enter-active,
.card-leave-active {
  transition: opacity 0.3s;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
}

.card-leave-active {
  position: absolute;
}

.spinner-container {
  position: fixed;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

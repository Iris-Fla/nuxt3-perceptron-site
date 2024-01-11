<script setup lang="ts">
import "~/assets/css/default.css";

const userData = useData();

const countQuestion = ref(userData.value.dataList.length);

const nowQuestion = ref(0);

const ans = ref(0);

const nextQuestion = () => {
  ans.value += userData.value.dataList[nowQuestion.value].weight * 1;
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  nowQuestion.value++;
};

const backButton = () => {
  if (nowQuestion.value === 0) {
    alert("これ以上戻れないのだ");
  } else {
    nowQuestion.value--;
    ans.value -= userData.value.dataList[nowQuestion.value].weight * 1;
  }
};

const nextQuestionX = () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    End();
  }
  nowQuestion.value++;
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
      <Card class="questionCard text-center" margin="4">
        <CardTitle
          >ずんだもんは {{ userData.dataList[nowQuestion].title }} ?</CardTitle
        >
        <Row>
          <Col>
            <b-button button="primary" @click="nextQuestion"
              ><BIcon icon="bi:circle"
            /></b-button>
          </Col>
          <Col>
            <b-button button="danger" @click="nextQuestionX"
              ><BIcon icon="bi:x-circle"
            /></b-button>
          </Col>
        </Row>
      </Card>
    </Container>
  </div>
</template>

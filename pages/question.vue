<script setup lang="ts">
const userData = useData();

const countQuestion = ref(userData.value.dataList.length);

const nowQuestion = ref(0);

const ans = ref(0)

const nextQuestion = () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    alert("終了");
  }
  
  nowQuestion.value++;
};

const nextQuestionX = () => {
  if (nowQuestion.value === countQuestion.value - 1) {
    alert("終了");
  }
  nowQuestion.value++;
};

</script>
<template>
  <Container>
    <div>今の問題 {{ nowQuestion }}</div>
    <div>問題数 {{ countQuestion }}</div>
    <Card class="questionCard text-center" margin="4">
        <CardTitle>ずんだもんは {{ userData.dataList[nowQuestion].title }} ?</CardTitle>
        <Row>
            <Col>
                <b-button button="primary" @click="nextQuestion"><BIcon icon="bi:circle" /></b-button>
            </Col>
            <Col>
                <b-button button="danger" @click="nextQuestion"><BIcon icon="bi:x-circle" /></b-button>
            </Col>
        </Row>
    </Card>
  </Container>
</template>
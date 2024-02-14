<script setup lang="ts">
const testans = ref(0);

const userData = useData();

const updateAns = (item: any) => {
  if (item.checked === true) {
    testans.value += item.weight * 1;
  } else {
    testans.value -= item.weight * 1;
  }
};
</script>

<template>
  <div class="questionBackground">
    <Container>
      <Transition name="card">
        <Card class="questionCard text-center center-card basicShadow">
          <img class="debug-image" src="/debug.png" alt="検証モード" />
          <h3
            :style="{
              color: testans + userData.biasData > 0 ? 'green' : 'red',
            }"
          >
            スコア:{{ testans + userData.biasData }}
          </h3>
          <Row
            align-items="center"
            justify-content="between"
            v-for="(item, index) in userData.dataList"
            :key="index"
          >
            <Col col="7" margin="2">
              {{ item.title }}-重み:{{ item.weight }}
            </Col>
            <Col col="3" margin="2">
              <BFormCheck switch class="large-button">
                <BFormCheckInput
                  class="large-button"
                  v-model="item.checked"
                  v-on:change="updateAns(item)"
                />
              </BFormCheck>
            </Col>
          </Row>
          <ButtonGroup>
            <b-a class="remake-button" button="primary" href="/">
              <BIcon margin="e-1" icon="bi:wrench-adjustable" />つくりなおす
            </b-a>
          </ButtonGroup>
        </Card>
      </Transition>
    </Container>
  </div>
</template>
<style scoped>
.center-card {
  position: fixed;
  width: 60%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.large-button {
  width: 50px;
  height: 30px;
}

.remake-button {
  height: 70px;
  font-size: 25px;
}
</style>

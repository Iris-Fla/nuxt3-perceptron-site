<script setup lang="ts">
import "~/assets/css/default.css";

const testans = ref(0);

const userData = useData();

const checked = ref(false);

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
          <img
            class="debug-image"
            src="/debug.png"
            alt="検証モード"
          />
          <h3>スコア:{{ testans + userData.biasData }}</h3>
          <ol>
            <li v-for="(item, index) in userData.dataList" :key="index">
              {{ item.title }}-重み:{{ item.weight }}
              <BFormCheck switch>
                <BFormCheckInput
                  v-model="item.checked"
                  v-on:change="updateAns(item)"
                />
              </BFormCheck>
            </li>
          </ol>
          <ButtonGroup>
            <b-a button="primary" href="/">
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
  width: 40%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

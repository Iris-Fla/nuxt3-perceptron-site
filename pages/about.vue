<script setup lang="ts">
import "~/assets/css/default.css";
</script>
<template>
  <div class="defaultBackground">
    <Container>
      <header>
        <router-link to="/">
          <img class="center-image" src="/Header.png" alt="Logo" />
        </router-link>
      </header>
      <img class="text-image" src="/debugtitle.png" alt="パーセプトロンとは" />
      <b-p margin="3" class="white-text Mochi"
        >パーセプトロンは、脳の神経細胞が情報を処理する仕組みを模倣したコンピューターモデルの一つです。イメージとしては、脳が情報を受け取り、それに応じて反応するようなものです。<span class="blue-text">このサイトでは単純パーセプトロンの仕組みについて学習する事が可能です</span><br /></b-p
      >
      <BH3 margin="3" class="white-text Mochi">...?</BH3>
      <b-p margin="3" class="white-text">大丈夫です。このサイトを使って学習していきましょう😁<br/>
        <BH3 class="white-text Mochi">・AIの仕組みを学習する</BH3>
      人間の行動には常に理由が存在しています。例えば、<strong>学校に登校する</strong>という行動は、[学校に行かないと怒られる,勉強したい,友達と遊びたい]等の理由(後述する"重み")があります。<br/>
      これらの<span class="underline">理由付けによる行動の結果を数字だけで出来るようにしよう</span>というのが、パーセプトロンの目的です。<br/>
    </b-p>
    </Container>
  </div>
</template>
<style scoped>
.white-text {
  color: white;
}
.blue-text {
  color: #00bfff;
}
.underline {
    border-bottom: solid 2px #00bfff;
}
</style>

<template>
  <div class="pool-container">
    <div class="panel-bg">
      <div class="pool-wrapper">
        <div class="pool-title">CHAR POINTS</div>
        <div class="pool-value">{{ state.build.SPECIAL.PL.baseValue }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Pool",
  setup() {
    const store = useStore();
    return {
      state: store.state,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pool-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}
.pool-title {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  width: 70%;
  text-align: left;
}
.pool-value {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  width: 20%;
  font-family: "Gothic821 Cn BT", Helvetica, Arial;
  font-size: 28px;
  color: rgb(236, 236, 236);
  -webkit-text-stroke: 1px black;
  /* border: 1px solid black; */
}
</style>

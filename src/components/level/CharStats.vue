<template>
  <div class="char-stats-container">
    <div class="panel-bg">
      <div class="char-stats-title">CHAR STATS</div>
      <div v-for="charStat in Object.keys(CharStats)" :key="charStat">
        <div class="char-stats-wrapper">
          <div class="char-stat-name">{{ CharStats[charStat].name }}</div>
          <div class="char-stat-value">{{ CharStats[charStat].value }}</div>
          <!-- <div class="charStat-percent">%</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "CharStats",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("refreshStats");
    });
    return {
      state: store.state,
      CharStats: store.state.build.CharStats,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.char-stats-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  /* font-size: 16px; */
}
.char-stat-name {
  text-align: left;
  /* margin-top: 1px; */
  padding-left: 10px;
}
.char-stat-value {
  text-align: left;
  /* margin-top: 1px; */
  padding-right: 10px;
}
</style>

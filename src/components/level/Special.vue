<template>
  <div class="special-container">
    <div class="panel-bg">
      <div class="special-title">SPECIAL</div>
      <div v-for="stat in Object.keys(SPECIAL)" :key="stat">
        <div class="special-stat-wrapper" v-if="stat !== 'PL'">
          <div class="special-stat-name" @click="showInfo('SPECIAL', stat)">
            {{ SPECIAL[stat].name }}
          </div>
          <div
            class="special-stat-desc"
            :style="`color: ${descriptions[SPECIAL[stat].baseValue].color};`"
          >
            {{ descriptions[SPECIAL[stat].baseValue].desc }}
          </div>
          <div class="special-stat-minus" @click="modifySPECIAL('-', stat)">
            --
          </div>
          <div class="special-stat-value">{{ SPECIAL[stat].baseValue }}</div>
          <div class="special-stat-plus" @click="modifySPECIAL('+', stat)">
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import "./level.css";

export default defineComponent({
  name: "SPECIAL",
  setup() {
    const store = useStore();
    const descriptions = {
      1: {
        desc: "Very Bad",
        color: "#de9d9d",
      },
      2: {
        desc: "Bad",
        color: "#e2ad92",
      },
      3: {
        desc: "Poor",
        color: "#e0bf93",
      },
      4: {
        desc: "Fair",
        color: "#e2d487",
      },
      5: {
        desc: "Average",
        color: "#d9e084",
      },
      6: {
        desc: "Good",
        color: "#c2e266",
      },
      7: {
        desc: "Very Good",
        color: "#aff35b",
      },
      8: {
        desc: "Great",
        color: "#8cf74d",
      },
      9: {
        desc: "Excellent",
        color: "#62f740",
      },
      10: {
        desc: "Heroic",
        color: "#2ef800",
      },
    };
    const modifySPECIAL = (modifier: string, statName: string) => {
      store.dispatch("modifySpecial", { modifier, statName });
    };
    const showInfo = (category: string, stat: string) => {
      store.dispatch("updateInfoPanel", { category, stat });
    };
    onMounted(() => {
      store.dispatch("refreshStats");
    });
    return {
      state: store.state,
      SPECIAL: store.state.build.SPECIAL,
      modifySPECIAL,
      descriptions,
      showInfo,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special-stat-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: 1px solid green; */
}
.special-stat-name {
  font-size: 28px;
  color: #dbdb34;
  -webkit-text-stroke: 1px black;
  width: 15%;
}
.special-stat-desc {
  margin-top: auto;
  margin-bottom: auto;
  width: 40%;
  font-family: "Fixedsys Excelsior 3.01", Helvetica, Arial;
  font-size: 14px;
  /* color: white; */
  text-shadow: 1px 1px rgb(48, 41, 41);
  /* border: 1px solid black; */
}
.special-stat-value {
  width: 15%;
  font-family: "Gothic821 Cn BT", Helvetica, Arial;
  font-size: 28px;
  color: rgb(236, 236, 236);
  -webkit-text-stroke: 1px black;
  /* border: 1px solid black; */
}
.special-stat-minus,
.special-stat-plus {
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  font-family: "Gothic821 Cn BT", Helvetica, Arial;
  font-size: 24px;
  font-weight: 700;
  color: rgb(107, 179, 111);
  text-shadow: 1px 1px rgb(48, 41, 41);
  /* -webkit-text-stroke: 1px black; */
  /* border: 1px solid black; */
  /* border-radius: 50%; */
}
</style>

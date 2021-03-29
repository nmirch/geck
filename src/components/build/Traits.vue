<template>
  <div class="traits-container">
    <div class="panel-bg">
      <div class="traits-title">TRAITS</div>
      <div class="traits-left">
        <div class="trait-item" v-for="trait in traitsLeft" :key="trait">
          <Checkbox
            category="Traits"
            :attribute="trait"
            style="margin-left: 0px; margin-right: 5px"
          />
          <div class="trait-name" @click="showInfo('Traits', trait)">
            {{ Traits[trait].name }}
          </div>
        </div>
      </div>
      <div class="traits-right">
        <div class="trait-item" v-for="trait in traitsRight" :key="trait">
          <div class="trait-name" @click="showInfo('Traits', trait)">
            {{ Traits[trait].name }}
          </div>
          <Checkbox
            category="Traits"
            :attribute="trait"
            style="margin-left: 5px; margin-right: 5px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Checkbox from "@/components/subcomponents/Checkbox.vue";

export default defineComponent({
  name: "Traits",
  components: {
    Checkbox,
  },
  setup() {
    const store = useStore();
    const showInfo = (category: string, stat: string) => {
      store.dispatch("updateInfoPanel", { category, stat });
    };
    const traitsLeft = [
      "FastMetabolism",
      "Bruiser",
      "OneHander",
      "Finesse",
      "Kamikaze",
      "HeavyHanded",
      "FastShot",
    ];
    const traitsRight = [
      "BloodyMess",
      "Jinxed",
      "GoodNatured",
      "ChemReliant",
      "Bonehead",
      "Skilled",
      "Loner",
    ];
    return {
      state: store.state,
      Traits: store.state.build.Traits,
      traitsLeft,
      traitsRight,
      showInfo,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.traits-left {
  display: inline-block;
  position: relative;
  text-align: left;
  /* padding-left: 10px; */
  width: 50%;
  font-size: 14px;
}
.traits-right {
  display: inline-block;
  position: relative;
  text-align: left;
  /* padding-left: 10px; */
  width: 40%;
  font-size: 14px;
}
.trait-item {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}
.trait-name {
  width: 100%;
}
</style>

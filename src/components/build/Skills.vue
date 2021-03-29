<template>
  <div class="skills-container">
    <div class="panel-bg">
      <div class="skills-title">SKILLS</div>
      <div v-for="skill in Object.keys(Skills)" :key="skill">
        <div
          class="skill-wrapper"
          :style="
            skill === 'Scavenging'
              ? 'color: #b5b7b5;'
              : Skills[skill].tagged
              ? 'color: #f1fff3;'
              : ''
          "
        >
          <div class="skill-name" @click="showInfo('Skills', skill)">
            {{ Skills[skill].name }}
          </div>
          <div class="skill-value">{{ Skills[skill].value }}</div>
          <div class="skill-percent">%</div>
          <Checkbox
            category="Skills"
            :attribute="skill"
            :style="skill === 'Scavenging' ? 'opacity: 0;' : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import Checkbox from "@/components/subcomponents/Checkbox.vue";

export default defineComponent({
  name: "Skills",
  components: {
    Checkbox,
  },
  setup() {
    const store = useStore();
    const showInfo = (category: string, stat: string) => {
      store.dispatch("updateInfoPanel", { category, stat });
    };
    onMounted(() => {
      store.dispatch("refreshStats");
    });
    return {
      state: store.state,
      Skills: store.state.build.Skills,
      showInfo,
    };
  },
});
</script>

<style scoped>
.skill-wrapper {
  display: flex;
  justify-content: space-between;
}
.skill-name {
  position: relative;
  width: 70%;
  text-align: left;
  padding-left: 10px;
}
.skill-value {
  position: relative;
  width: 20%;
  text-align: right;
  padding-right: 2px;
  letter-spacing: normal;
}
.skill-percent {
  position: relative;
  margin-right: 4px;
}
</style>

<template>
  <div
    :class="build[category][attribute].tagged ? 'checkbox checked' : 'checkbox'"
    @click="tag(category, attribute)"
  ></div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Checkbox",
  props: ["category", "attribute"],
  setup() {
    const store = useStore();
    const tag = (category, attribute) => {
      if (category === "Skills") {
        store.dispatch("tagSkill", attribute);
      } else {
        store.dispatch("tagTrait", attribute);
      }
    };
    onMounted(() => {
      store.dispatch("refreshStats");
    });
    return {
      state: store.state,
      build: store.state.build,
      tag,
    };
  },
});
</script>
<style scoped>
.checkbox {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  width: 9px;
  height: 9px;
  border: 1px solid white;
  border-radius: 50%;
}
.checked {
  background-color: rgb(199, 198, 198);
}
</style>
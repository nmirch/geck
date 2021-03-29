<template>
  <div class="header-container">
    <div class="panel-bg">
      <div class="header-title">
        FOnline Reloaded Season 4 Character Planner
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

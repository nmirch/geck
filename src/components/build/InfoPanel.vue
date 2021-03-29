<template>
  <div class="info-panel-container">
    <div class="panel-bg">
      <div class="info-panel-title">INFO PANEL</div>
      <div class="info-panel-wrapper">
        <div class="info-panel-card-container">
          <div class="info-panel-header">
            {{ infoPanelData.name }}
          </div>
          <div class="info-panel-description">
            {{ infoPanelData.description }}
          </div>
          <div class="info-panel-image">
            <img
              :src="getImage(infoPanelData.type, infoPanelData.image)"
              width="100"
              height="100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "InfoPanel",
  setup() {
    const store = useStore();
    const infoPanelData = ref({ ...store.state.infoPanel });
    const getImage = (type: string, image: string) => {
      let img;
      try {
        img = require(`@/assets/img/info-panel/${type}/${image}.png`);
      } catch (e) {
        img = require("@/assets/img/info-panel/Default/Info Panel.png");
      }
      return img;
    };
    watch(
      () => store.state.infoPanel,
      (to) => {
        infoPanelData.value = { ...to };
      }
    );
    return {
      state: store.state,
      infoPanelData,
      getImage,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-panel-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  height: 180px;
}
.info-panel-header {
  font-size: 25px;
  text-align: left;
  margin-top: 5px;
  margin-left: 15px;
  width: 92%;
  border-bottom: 2px ridge black;
  color: black;
}
.info-panel-description {
  color: black;
  text-align: justify;
  width: 65%;
  margin-top: 10px;
  padding-left: 15px;
  font-family: "Fixedsys Excelsior 3.01", Helvetica, Arial;
  font-size: 14px;
}
.info-panel-card-container {
  width: 92%;
  background-image: url("../../assets/img/info-panel/bg.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: 101%;
  border: 2px ridge black;
  border-radius: 5px;
}
.info-panel-image {
  position: absolute;
  top: 55px;
  right: 25px;
}
</style>

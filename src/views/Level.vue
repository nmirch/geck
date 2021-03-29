<template>
  <div class="build-state-container noselect">
    <Header />
    <Special />
    <Pool />
    <CharStats />
    <Skills />
    <Traits />
    <InfoPanel />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./home.css";
import Special from "@/components/level/Special.vue"; // @ is an alias to /src
import CharStats from "@/components/level/CharStats.vue";
import Skills from "@/components/level/Skills.vue";
import Traits from "@/components/level/Traits.vue";
import InfoPanel from "@/components/level/InfoPanel.vue";
import Pool from "@/components/level/Pool.vue";
import Footer from "@/components/level/Footer.vue";
import Header from "@/components/level/Header.vue";

export default defineComponent({
  name: "Home",
  components: {
    Special,
    CharStats,
    Skills,
    Traits,
    InfoPanel,
    Pool,
    Footer,
    Header,
  },
});
</script>


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
import Special from "@/components/build/Special.vue"; // @ is an alias to /src
import CharStats from "@/components/build/CharStats.vue";
import Skills from "@/components/build/Skills.vue";
import Traits from "@/components/build/Traits.vue";
import InfoPanel from "@/components/build/InfoPanel.vue";
import Pool from "@/components/build/Pool.vue";
import Footer from "@/components/build/Footer.vue";
import Header from "@/components/build/Header.vue";

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

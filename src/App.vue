<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Sample />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sample from "@/components/Sample.vue";

export default defineComponent({
  name: "App",
  components: {
    Sample,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>

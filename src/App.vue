<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import getAndSetFormValues from "./mixins/getAndSetFormValues";

Vue.mixin(getAndSetFormValues);

export default {
  name: "App",
};
</script>

<style lang="scss">
@import "node_modules/govuk-frontend/govuk/all";

body {
  margin: 0 auto;
}

#app {
  -webkit-font-smoothing: antialiased;
}
</style>

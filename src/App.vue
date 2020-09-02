<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import navigateToNextQuestion from "./mixins/navigateToNextQuestion";
import getAndSetFormValues from "./mixins/getAndSetFormValues";

Vue.mixin(navigateToNextQuestion);
Vue.mixin(getAndSetFormValues);

export default {
  name: "App",
};
</script>

<style lang="scss">
@import "node_modules/govuk-frontend/govuk/all";

#app {
  -webkit-font-smoothing: antialiased;
}
</style>

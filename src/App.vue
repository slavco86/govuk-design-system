<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import navigationFunctions from "./mixins/navigationFunctions";
import getAndSetFormValues from "./mixins/getAndSetFormValues";

Vue.mixin(navigationFunctions);
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

<template>
  <div id="app">
    <Layout msg="New Application" />
  </div>
</template>

<script>
import Layout from "./views/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import "node_modules/govuk-frontend/govuk/all";

#app {
  -webkit-font-smoothing: antialiased;
}
</style>

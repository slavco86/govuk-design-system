<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
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

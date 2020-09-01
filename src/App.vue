<template>
  <div id="app">
    <Layout msg="New Application"/>
  </div>
</template>

<script>
import Layout from './views/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
  @import "node_modules/govuk-frontend/govuk/all";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
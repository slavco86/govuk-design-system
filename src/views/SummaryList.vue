<template>
  <div class="govuk-width-container">
    <GovukSummaryList :form-data="getFormData"/>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
import GovukSummaryList from "../components/GovukSummaryList";

export default {
  name: "SummaryList",
  components: {
    GovukSummaryList,
  },
  computed: {
    ...mapGetters(["getFormData"]),
  }
};
</script>

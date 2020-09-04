<template>
  <div class="govuk-width-container">
    <GovukFieldsetLegend :legend-text="legendText" />
    <GovukSummaryList :form-data="formData"/>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
import GovukSummaryList from "../components/GovukSummaryList";
import GovukFieldsetLegend from "../components/GovukFieldsetLegend";

export default {
  name: "SummaryList",
  data: () => ({
    legendText: 'Please review your details before submission'
  }),
  components: {
    GovukSummaryList,
    GovukFieldsetLegend
  },
  computed: {
    ...mapGetters(["formData"]),
  }
};
</script>

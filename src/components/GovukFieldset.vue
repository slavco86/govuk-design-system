<template>
  <fieldset class="govuk-fieldset">
    <GovukFieldsetLegend :legend-text="legendText" />
    <GovukErrorMessage :error-message="formQuestionLabel.errorMessage" />
    <router-view :form-question-label="formQuestionLabel" />
  </fieldset>
</template>

<script>
import GovukErrorMessage from "./GovukErrorMessage";
import GovukFieldsetLegend from "./GovukFieldsetLegend";
const mapGetters = require("vuex")["mapGetters"];

export default {
  name: "GovukFieldset",
  components: {
    GovukErrorMessage,
    GovukFieldsetLegend,
  },
  props: {
    legendText: {
      type: String,
    },
    formQuestionLabel: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getFormErrorIsActive"]),
  },
};
</script>

<template>
  <fieldset class="govuk-fieldset">
    <GovukFieldsetLegend :legend-text="legendText" />
    <router-view :form-question-label="formQuestionLabel" />
  </fieldset>
</template>

<script>
import GovukFieldsetLegend from "./GovukFieldsetLegend";

export default {
  name: "GovukFieldset",
  components: {
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
};
</script>

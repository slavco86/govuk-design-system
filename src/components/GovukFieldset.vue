<template>
  <fieldset class="govuk-fieldset">
    <GovukFieldsetLegend :legend-text="legendText"/>
    <GovukFormGroup :form-question-label="formQuestionLabel"/>
  </fieldset>
</template>

<script>
import GovukFieldsetLegend from "./GovukFieldsetLegend";
import GovukFormGroup from "./GovukFormGroup";

export default {
  name: "GovukFieldset",
  components: {
    GovukFieldsetLegend,
    GovukFormGroup,
  },
  props: {
    legendText: {
      type: String,
    },
    formQuestionLabel: {
      type: String
    }
  },
};
</script>

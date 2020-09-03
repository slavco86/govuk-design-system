<template>
  <div class="govuk-form-group">
    <GovukLabel :form-question-label="formQuestionLabel.label" />
    <div v-if="formQuestionLabel.selectorOptions">
      <router-view
        :form-selector-options="item"
        v-for="item in formQuestionLabel.selectorOptions"
        :key="item"
      />
    </div>
    <div v-else>
      <router-view :form-question-label="formQuestionLabel"/>
    </div>
  </div>
</template>

<script>
import GovukLabel from "./GovukLabel";
export default {
  name: "GovukFormGroup",
  components: {
    GovukLabel,
  },
  props: {
    legendText: String,
    formQuestionLabel: Object,
  },
};
</script>

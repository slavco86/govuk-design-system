<template>
  <div class="govuk-form-group">
    <GovukLabel :form-question-label="formQuestionProperties.label" />
    <div v-if="formQuestionProperties.radioOptions">
      <div class="govuk-radios govuk-radios--inline">
        <router-view
          :form-selector-options="item"
          v-for="item in formQuestionProperties.radioOptions"
          :key="item"
        />
      </div>
    </div>
    <div v-else>
      <router-view :form-question-label="formQuestionProperties" />
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
    formQuestionProperties: Object,
  },
};
</script>

<template>
  <div class="govuk-form-group">
    <GovukLabel :form-question-label="formQuestionLabel"/>
    <router-view />
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
    formQuestionLabel: String,
  },
};
</script>

<template>
  <div class="govuk-form-group">
    <GovukLabel :form-question-label="formQuestionLabel"/>
    <GovukInput />
  </div>
</template>

<script>
import GovukInput from "./GovukInput";
import GovukLabel from "./GovukLabel";
export default {
  name: "GovukFormGroup",
  components: {
    GovukInput,
    GovukLabel,
  },
  props: {
    formQuestionLabel: String,
  },
};
</script>

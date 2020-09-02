<template>
  <div class="govuk-form-group">
    <GovukLabel />
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
};
</script>

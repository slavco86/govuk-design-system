<template>
  <div class="govuk-form-group">
    <GovukLabel label-text="First Name" />
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

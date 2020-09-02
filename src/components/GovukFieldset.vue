<template>
  <fieldset class="govuk-fieldset">
    <GovukFieldsetLegend />
    <GovukFormGroup />
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
};
</script>

<template>
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">{{ legendText }}</h1>
  </legend>
</template>

<script>
export default {
  name: "GovukFieldsetLegend",
  props: {
    legendText: {
      type: String,
    }
  },
};
</script>

<template>
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your name?
    </h1>
  </legend>
</template>

<script>
export default {
  name: "GovukFieldsetLegend",
  props: {
    legendText: String,
  },
};
</script>

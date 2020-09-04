<template>
  <dd class="govuk-summary-list__value">
    {{ formDataValues }}
  </dd>
</template>

<script>
export default {
  name: "GovukSummaryListValue",
  props: {
    formDataValues: String,
  },
};
</script>

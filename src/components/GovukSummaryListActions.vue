<template>
  <dd class="govuk-summary-list__actions">
    <router-link :to="{ name: `${formDataKeys}` }"
      >Change<span class="govuk-visually-hidden">
        contact information</span
      ></router-link
    >
  </dd>
</template>

<script>
export default {
  name: "GovukSummaryListActions",
  props: {
    formDataKeys: String,
  },
};
</script>

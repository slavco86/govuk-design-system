<template>
  <div class="govuk-summary-list__row">
    <GovukSummaryListKey :form-data-keys="formDataKeys"/>
    <GovukSummaryListValue :form-data-values="formDataValues"/>
    <GovukSummaryListActions />
  </div>
</template>

<script>
  import GovukSummaryListKey from "../components/GovukSummaryListKey";
  import GovukSummaryListValue from "../components/GovukSummaryListValue";
  import GovukSummaryListActions from "../components/GovukSummaryListActions";
export default {
  name: "GovukSummaryListRow",
  components: {
    GovukSummaryListKey,
    GovukSummaryListValue,
    GovukSummaryListActions
  },
  props: {
    formDataValues: String,
    formDataKeys: String,
  },
};
</script>

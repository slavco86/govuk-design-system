<template>
  <dl class="govuk-summary-list">
    <GovukSummaryListRow />
  </dl>
</template>

<script>
import GovukSummaryListRow from "../components/GovukSummaryListRow";

export default {
  name: "GovukSummaryList",
  components: {
    GovukSummaryListRow,
  },
};
</script>

<template>
  <div>
    <dl class="govuk-summary-list" v-for="(item, key) in formData" :key="item">
      <GovukSummaryListRow :form-data-values="item" :form-data-keys="key" />
    </dl>
  </div>
</template>

<script>
import GovukSummaryListRow from "../components/GovukSummaryListRow";

export default {
  name: "GovukSummaryList",
  components: {
    GovukSummaryListRow,
  },
  props: {
    formData: Object,
  },
};
</script>

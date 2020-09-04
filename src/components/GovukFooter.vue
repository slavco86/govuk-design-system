<template>
  <footer class="govuk-footer">
    <div class="govuk-width-container">
      <GovukFooterMeta />
    </div>
  </footer>
</template>

<script>
import GovukFooterMeta from "./GovukFooterMeta";

export default {
  name: "GovukFooter",
  components: {
    GovukFooterMeta,
  },
};
</script>

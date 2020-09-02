<template>
    <header class="govuk-header" role="banner" data-module="govuk-header">
      <GovukHeaderContainer />
    </header>
</template>

<script>
import GovukHeaderContainer from "./GovukHeaderContainer";
export default {
  name: "GovukHeader",
  components: {
    GovukHeaderContainer,
  },
};
</script>

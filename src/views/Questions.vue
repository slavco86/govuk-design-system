<template>
  <div>
    <GovukHeader />
    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content" role="main">
        <GovukFieldset />
        <GovukButton button-text="Continue" />
      </main>
    </div>
    <GovukFooter />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukFieldset from "../components/GovukFieldset";
import GovukButton from "../components/GovukButton";
import GovukFooter from "../components/GovukFooter";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukFieldset,
    GovukButton,
    GovukFooter,
  },
};
</script>

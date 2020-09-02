<template>
  <div>
    <GovukHeader />
    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content" role="main">
        <router-view :legend-text="fieldSetLegend" />
        <GovukButton
          button-text="Continue"
          :button-action="navigateToNextQuestion"
        />
      </main>
    </div>
    <GovukFooter />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukButton from "../components/GovukButton";
import GovukFooter from "../components/GovukFooter";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukButton,
    GovukFooter,
  },
  computed: {
    fieldSetLegend() {
      const { name } = this.$route;
      switch (name) {
        case "Name":
          return "What is your name?";
        case "Date of Birth":
          return "What is your date of birth?";
        case "Gender":
          return "What is your gender?";
        default:
          return "Error in fieldSetLegend computed property";
      }
    },
  },
};
</script>
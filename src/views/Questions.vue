<template>
  <div>
    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content" role="main">
        <router-view
          :legend-text="fieldSetLegend"
          :form-question-label="formQuestionLabel"
        />
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
import GovukButton from "../components/GovukButton";
import GovukFooter from "../components/GovukFooter";

export default {
  name: "Questions",
  components: {
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
    formQuestionLabel() {
      const { name } = this.$route;
      switch (name) {
        case "Name":
          return "Full Name";
        case "Date of Birth":
          return "Date of Birth";
        case "Gender":
          return "Gender";
        default:
          return "Error in fieldSetLabel computed property";
      }
    },
  },
};
</script>

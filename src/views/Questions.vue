<template>
  <div class="govuk-width-container">
    <main class="govuk-main-wrapper" id="main-content" role="main">
      <router-view :legend-text="fieldSetLegend" :form-question-label="formQuestionLabel"
      />
      <GovukButton
        button-text="Continue"
        :button-action="navigateToNextRoute"
      />
    </main>
  </div>
</template>

<script>
import GovukButton from "../components/GovukButton";

export default {
  name: "Questions",
  components: {
    GovukButton,
  },
  data: () => ({
    questionProperties: {
      label: '',
    }
  }),
  computed: {
    fieldSetLegend() {
      const { name } = this.$route;
      switch (name) {
        case "Name":
          return "What is your name?";
        case "Date of birth":
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
          return {
              label: 'Full Name'
          }
        case "Date of birth":
          return {
            label: ''
          }
        case "Gender":
          return {
            label: '',
            selectorOptions: {
              male: 'Male',
              female: 'Female'
            }
          }
        default:
          return "";
      }
    },
  },
};
</script>

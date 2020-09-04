<template>
  <div class="govuk-width-container">
    <main class="govuk-main-wrapper" id="main-content" role="main">
      <div :class="{'govuk-form-group': getFormErrorIsActive, 'govuk-form-group--error': getFormErrorIsActive}">
        <router-view
          :legend-text="fieldSetLegend"
          :form-question-label="formQuestionLabel"
        />
      </div>
      <GovukButton
        button-text="Continue"
        :button-action="navigateToNextRoute"
      />
    </main>
  </div>
</template>

<script>
import GovukButton from "../components/GovukButton";
const mapGetters = require("vuex")["mapGetters"];

export default {
  name: "Questions",
  components: {
    GovukButton,
  },
  data: () => ({
    questionProperties: {
      label: "",
    },
    errorIsActive: false,
  }),
  computed: {
    ...mapGetters(["getFormData"]),
    ...mapGetters(["getFormErrorIsActive"]),
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
    // This name is incorrect, but if I attempt to change it to 'formQuestionProperties',
    // and reflect the changes in child component, the value always returns as 'undefined'.
    // Can't work out why.
    formQuestionLabel() {
      const { name } = this.$route;
      switch (name) {
        case "Name":
          return {
            label: "Full Name",
          };
        case "Date of birth":
          return {
            label: "",
            answerHint: "For example, 31 3 1980",
          };
        case "Gender":
          return {
            label: "",
            radioOptions: {
              male: "Male",
              female: "Female",
            },
          };
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <div class="govuk-width-container">
    <main class="govuk-main-wrapper" id="main-content" role="main">
      <div
        :class="{
          'govuk-form-group': getFormErrorIsActive,
          'govuk-form-group--error': getFormErrorIsActive,
        }"
      >
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
    errorMessage: "",
  }),
  computed: {
    ...mapGetters(["getFormData"]),
    ...mapGetters(["getFormErrorIsActive"]),
    ...mapGetters(["getDateOfBirthDay"]),
    ...mapGetters(["getDateOfBirthMonth"]),
    ...mapGetters(["getDateOfBirthYear"]),
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
            errorMessage: this.errorMessage,
            label: "Full Name",
          };
        case "Date of birth":
          return {
            errorMessage: this.errorMessage,
            label: "",
            answerHint: "For example, 31 3 1980",
          };
        case "Gender":
          return {
            errorMessage: this.errorMessage,
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
  methods: {
    checkIfBirthDateIsInPast() {
      let dateToday = new Date();

      let ddToday = dateToday.getDate();
      let mmToday = dateToday.getMonth() + 1;
      let yyyyToday = dateToday.getFullYear();

      if (ddToday < 10) {
        ddToday = "0" + ddToday;
      }

      if (mmToday < 10) {
        mmToday = "0" + mmToday;
      }
      dateToday = yyyyToday + mmToday + ddToday;

      let ddBirthDate = this.getDateOfBirthDay;
      let mmBirthDate = this.getDateOfBirthMonth;
      let yyyyBirthDate = this.getDateOfBirthYear;

      if (this.getDateOfBirthDay < 10) {
        ddBirthDate = "0" + ddBirthDate;
      }

      if (this.getDateOfBirthMonth < 10) {
        mmBirthDate = "0" + mmBirthDate;
      }

      let birthDate = yyyyBirthDate + mmBirthDate + ddBirthDate;

      if (birthDate <= dateToday) {
        return true;
      } else {
        return false;
      }
    },
    getNextRoute() {
      const { name } = this.$route;
      switch (name) {
        case "Name":
          return "Date of birth";
        case "Date of birth":
          return "Gender";
        case "Gender":
          return "Summary List";
      }
    },
    navigateToNextRoute() {
      const formValidationRules = {
        name: {
          mustContainValue: !!this.getFormData.Name,
          mustContainFullName: /^[a-zA-Z]+ [a-zA-Z]+$/,
        },
        dateOfBirth: {
          mustContainDay: !!this.getDateOfBirthDay,
          mustContainMonth: !!this.getDateOfBirthMonth,
          mustContainYear: !!this.getDateOfBirthYear,
          mustContainOnlyNumbers: /^[0-9]+$/,
          mustBePresentOrPast: this.checkIfBirthDateIsInPast(),
        },
        gender: {
          mustContainValue: !!this.getFormData.Gender,
        },
      };

      const { name } = this.$route;
      switch (name) {
        case "Name":
          if (!formValidationRules.name.mustContainValue) {
            this.errorMessage = "Please provide your full name.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (
            !formValidationRules.name.mustContainFullName.test(
              this.getFormData.Name
            )
          ) {
            this.errorMessage = "Please provide both your first and last name.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else {
            this.$store.dispatch("updateFormErrorIsActive", false);
            this.$router.push({ name: this.getNextRoute() });
          }
          break;
        case "Date of birth":
          if (
            !formValidationRules.dateOfBirth.mustContainDay &&
            !formValidationRules.dateOfBirth.mustContainMonth &&
            !formValidationRules.dateOfBirth.mustContainYear
          ) {
            this.errorMessage = "Please provide your date of birth.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (
            !formValidationRules.dateOfBirth.mustContainDay &&
            !formValidationRules.dateOfBirth.mustContainMonth
          ) {
            this.errorMessage =
              "Please enter the day and month when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (
            !formValidationRules.dateOfBirth.mustContainDay &&
            !formValidationRules.dateOfBirth.mustContainYear
          ) {
            this.errorMessage =
              "Please enter the day and year when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (
            !formValidationRules.dateOfBirth.mustContainMonth &&
            !formValidationRules.dateOfBirth.mustContainYear
          ) {
            this.errorMessage =
              "Please enter the month and year when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (!formValidationRules.dateOfBirth.mustContainDay) {
            this.errorMessage = "Please enter the day when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (!formValidationRules.dateOfBirth.mustContainMonth) {
            this.errorMessage = "Please enter the month when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (!formValidationRules.dateOfBirth.mustContainYear) {
            this.errorMessage = "Please enter the year when you were born.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (
            !formValidationRules.dateOfBirth.mustContainOnlyNumbers.test(
              this.getDateOfBirthDay
            ) ||
            !formValidationRules.dateOfBirth.mustContainOnlyNumbers.test(
              this.getDateOfBirthMonth
            ) ||
            !formValidationRules.dateOfBirth.mustContainOnlyNumbers.test(
              this.getDateOfBirthYear
            )
          ) {
            this.errorMessage = "Only numbers are allowed.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else if (!formValidationRules.dateOfBirth.mustBePresentOrPast) {
            this.errorMessage = "Birth date can not be in the future.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else {
            this.$store.dispatch("updateFormErrorIsActive", false);
            this.$router.push({ name: this.getNextRoute() });
          }
          break;
        case "Gender":
          if (!formValidationRules.gender.mustContainValue) {
            this.errorMessage = "Please select your gender.";
            this.$store.dispatch("updateFormErrorIsActive", true);
          } else {
            this.$store.dispatch("updateFormErrorIsActive", false);
            this.$router.push({ name: this.getNextRoute() });
          }
          break;
        default:
          console.log("Error in navigateToNextRoute()");
      }
    },
  },
};
</script>

export default {
  methods: {
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
    getPreviousRoute() {
      const { name } = this.$route;
      switch (name) {
        case "Summary List":
          return "Gender";
        case "Gender":
          return "Date of birth";
        case "Date of birth":
          return "Name";
      }
    },
    navigateToNextRoute() {
      const nameInputIsValid = !!this.getFormData.Name;
      const dateOfBirthInputIsValid = !!this.getFormData["Date of birth"];
      const genderSelectionInputIsValid = !!this.getFormData.Gender;
      const { name } = this.$route;
      switch (name) {
        case "Name":
          if (nameInputIsValid) {
            this.$router.push({ name: this.getNextRoute() });
          } else {
            this.$store.dispatch("updateFormErrorIsActive", true);
          }
          break;
        case "Date of birth":
          if (dateOfBirthInputIsValid) {
            this.$router.push({ name: this.getNextRoute() });
          }
          break;
        case "Gender":
          if (genderSelectionInputIsValid) {
            this.$router.push({ name: this.getNextRoute() });
          }
          break;
        default:
          console.log("Error in navigateToNextRoute()");
      }
    },
    navigateToPreviousRoute() {
      this.$router.push({ name: this.getPreviousRoute() });
    },
  },
};

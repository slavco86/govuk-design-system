<template>
  <div>
    <GovukHeader />
    <GovukBackLink :link-action="navigateToPreviousRoute" />
    <router-view />
    <GovukFooter />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukBackLink from "../components/GovukBackLink";
import GovukFooter from "../components/GovukFooter";
export default {
  name: "Layout",
  components: {
    GovukHeader,
    GovukBackLink,
    GovukFooter
  },
  computed: {
    formSelectionOptions() {
      const { name } = this.$route;
      switch (name) {
        case "Gender":
          this.$store.dispatch("updateQuestionHasSelectorOptions", true);
          this.$store.dispatch("updateFormSelectorOptions", {
            female: "Female",
            male: "Male",
          });
          return;
        default:
          this.$store.dispatch("updateFormSelectorOptions", null);
          this.$store.dispatch("updateQuestionHasSelectorOptions", false);
          return "Error in formQuestionSelectionOptions computed property";
      }
    },
  }
};
</script>

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
    GovukFooter,
  },
  methods: {
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
    navigateToPreviousRoute() {
      this.$store.dispatch("updateFormErrorIsActive", false);
      this.$router.push({ name: this.getPreviousRoute() });
    },
  },
};
</script>

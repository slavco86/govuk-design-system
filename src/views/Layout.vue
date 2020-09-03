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
};
</script>

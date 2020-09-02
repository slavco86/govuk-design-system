<template>
  <div>
    <GovukHeader />
    <GovukBackLink :link-action="navigateToPreviousRoute" />
    <router-view />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukBackLink from "../components/GovukBackLink";
export default {
  name: "Layout",
  components: {
    GovukHeader,
    GovukBackLink,
  },
};
</script>

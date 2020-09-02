<template>
  <div>
    <GovukHeader />
    <GovukBackLink />
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

<template>
  <div>
    <GovukHeader />
    <GovukFieldset />
    <GovukButton button-text="Continue" />
    <GovukFooter />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukFieldset from "../components/GovukFieldset";
import GovukButton from "../components/GovukButton";
import GovukFooter from "../components/GovukFooter";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukFieldset,
    GovukButton,
    GovukFooter
  },
};
</script>
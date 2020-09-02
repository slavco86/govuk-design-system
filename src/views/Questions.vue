<template>
  <div>
    <GovukHeader />
    <GovukFieldset />
    <GovukButton button-text="Continue" />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukFieldset from "../components/GovukFieldset";
import GovukButton from "../components/GovukButton";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukFieldset,
    GovukButton
  },
};
</script>

<template>
  <div>
    <GovukHeader />
    <GovukFieldset />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukFieldset from "../components/GovukFieldset";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukFieldset
  },
};
</script>

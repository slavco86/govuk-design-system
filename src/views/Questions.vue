<template>
  <div>
    <GovukHeader />
    <GovukFormGroup />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
import GovukFormGroup from "../components/GovukFormGroup";

export default {
  name: "Questions",
  components: {
    GovukHeader,
    GovukFormGroup
  },
};
</script>

<template>
  <div>
    <GovukHeader />
    <router-view />
  </div>
</template>

<script>
import GovukHeader from "../components/GovukHeader";
export default {
  name: "Layout",
  components: {
    GovukHeader,
  },
};
</script>

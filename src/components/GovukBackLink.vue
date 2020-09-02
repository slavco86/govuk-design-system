<template>
  <div class="govuk-width-container">
    <a @click="goBackOneView" class="govuk-back-link">Back</a>
  </div>
</template>

<script>
export default {
  name: "GovukBackLink",
  methods: {
    goBackOneView() {
        this.$router.go(-1)
    },
  },
};
</script>

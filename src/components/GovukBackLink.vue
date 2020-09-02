<template>
  <div v-if="this.$route.name !== 'Name'" class="govuk-width-container">
    <a @click="linkAction" class="govuk-back-link">Back</a>
  </div>
</template>

<script>
export default {
  name: "GovukBackLink",
    props: {
        buttonText: String,
        linkAction: Function
    }
};
</script>

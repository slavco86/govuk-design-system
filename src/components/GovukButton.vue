<template>
  <button @click="buttonAction" class="govuk-button">
    {{ buttonText }}
  </button>
</template>

<script>
  export default {
    name: "GovukButton",
    props: {
      buttonText: String,
      buttonAction: Function
    }
  };
</script>

<template>
  <button class="govuk-button">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "GovukButton",
  props: {
    buttonText: String,
  },
};
</script>

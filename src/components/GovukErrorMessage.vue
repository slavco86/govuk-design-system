<template>
    <span class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> {{ errorMessage }}
</span>
</template>

<script>
    export default {
        name: "GovukErrorMessage",
        props: {
            errorMessage: {
                type: String
            }
        }
    };
</script>

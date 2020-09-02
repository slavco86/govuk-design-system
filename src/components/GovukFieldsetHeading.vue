<template>
  <h1 class="govuk-fieldset__heading"> {{ headingText }}</h1>
</template>

<script>
    export default {
        name: 'GovukFieldsetHeading',
        props: {
            headingText: String
        }
    }
</script>
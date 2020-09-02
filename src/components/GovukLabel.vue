<template>
    <label class="govuk-label">
        {{ formQuestionLabel }}
    </label>
</template>

<script>
    export default {
        name: "GovukLabel",
        props: {
            formQuestionLabel: String,
        },
    };
</script>
<template>
    <dt class="govuk-summary-list__key">
        {{ formDataKeys }}
    </dt>
</template>

<script>
    export default {
        name: "GovukSummaryListKey",
        props: {
            formDataKeys: String,
        },
    };
</script>
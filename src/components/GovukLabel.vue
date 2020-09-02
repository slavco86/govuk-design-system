<template>
    <label class="govuk-label">
        {{ labelText }}
    </label>
</template>

<script>
    export default {
        name: "GovukLabel",
        props: {
            labelText: String,
        },
    };
</script>
e
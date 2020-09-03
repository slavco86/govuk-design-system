<template>
  <input
    class="govuk-input govuk-date-input__input govuk-input--width-2"
    id="dob-day"
    name="dob-day"
    type="text"
    autocomplete="bday-day"
    pattern="[0-9]*"
    inputmode="numeric"
  />
</template>

<script>
    export default {
        name: "GovUKDateInput",
    };
</script>

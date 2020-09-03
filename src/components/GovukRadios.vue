<template>
  <div class="govuk-radios govuk-radios--inline">
    <div class="govuk-radios__item">
      <input v-model="inputValue" class="govuk-radios__input" type="radio" :value="formSelectorOptions" />
      <label class="govuk-label govuk-radios__label"> {{ formSelectorOptions }} </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "GovukRadios",
  props: {
    formSelectorOptions: String,
  },
};
</script>

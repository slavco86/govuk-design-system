<template>
  <div>
    <div id="dob-hint" class="govuk-hint">
      {{ formQuestionLabel.answerHint }}
    </div>
    <div class="govuk-date-input">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label">
            Day
          </label>
          <input
            v-model="dateDay"
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            type="text"
            autocomplete="on"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="2"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label">
            Month
          </label>
          <input
            v-model="dateMonth"
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            type="text"
            autocomplete="on"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="2"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label">
            Year
          </label>
          <input
            v-model="dateYear"
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            type="text"
            autocomplete="on"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GovUKDateInputWrapper",
  props: {
    formQuestionLabel: Object,
  },
};
</script>

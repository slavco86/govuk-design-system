<template>
  <div>
    <div id="dob-hint" class="govuk-hint">
      {{ formQuestionLabel.answerHint }}
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input
            v-model="dateDay"
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            autocomplete="bday-day"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input
            v-model="dateMonth"
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            autocomplete="bday-month"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input
            v-model="dateYear"
            class="govuk-input govuk-date-input__input govuk-input--width-4"
            id="dob-year"
            name="dob-year"
            type="text"
            autocomplete="bday-year"
            pattern="[0-9]*"
            inputmode="numeric"
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

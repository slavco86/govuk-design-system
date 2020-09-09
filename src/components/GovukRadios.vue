<template>
  <div class="govuk-radios__item">
    <input
      class="govuk-radios__input"
      type="radio"
      :value="inputValue"
      @change="$emit('input', $event.target.value)"
      v-on="listeners"
      v-bind="$attrs"
    />
    <label class="govuk-label govuk-radios__label" :for="$attrs.id">
      <slot name="label">{{ label }}</slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "GovukRadioInput",
  inheritAttrs: false,
  props: {
    inputValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    }
  },
  computed: {
    listeners() {
      const { change, input, ...listeners } = this.$listeners;
      return listeners;
    }
  }
};
</script>

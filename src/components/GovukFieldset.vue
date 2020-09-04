<template>
  <fieldset class="govuk-fieldset">
    <GovukFieldsetLegend :legend-text="legendText" />
    <GovukErrorMessage
      v-if="formErrorIsActive"
      :error-message="formQuestionProperties.errorMessage"
    />
    <router-view :form-question-properties="formQuestionProperties" />
  </fieldset>
</template>

<script>
import GovukErrorMessage from "./GovukErrorMessage";
import GovukFieldsetLegend from "./GovukFieldsetLegend";
const mapGetters = require("vuex")["mapGetters"];

export default {
  name: "GovukFieldset",
  components: {
    GovukErrorMessage,
    GovukFieldsetLegend,
  },
  props: {
    legendText: {
      type: String,
    },
    formQuestionProperties: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["formErrorIsActive"]),
  },
  mounted() {
    console.log('formQuestionProperties.errorMessage: ', this.formQuestionProperties);
  }
};
</script>

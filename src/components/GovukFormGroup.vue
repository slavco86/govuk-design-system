<template>
  <div class="govuk-form-group">
    <GovukLabel :form-question-label="formQuestionLabel" />
    <div v-if="getQuestionHasSelectorOptions">
      <router-view
        :form-selector-options="item"
        v-for="item in getFormSelectorOptions"
        :key="item"
      />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];
import GovukLabel from "./GovukLabel";
export default {
  name: "GovukFormGroup",
  components: {
    GovukLabel,
  },
  computed: {
    ...mapGetters(["getQuestionHasSelectorOptions"]),
    ...mapGetters(["getFormSelectorOptions"]),
  },
  props: {
    formQuestionLabel: String,
  },
};
</script>

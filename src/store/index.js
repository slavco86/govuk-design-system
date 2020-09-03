import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      "Name": null,
      "Date of birth": null,
      "Gender": null,
    },
    dateOfBirthRawValues: ["", "", ""],
    questionHasSelectorOptions: false,
    formSelectorOptions: {
    }
  },
  mutations: {
    setFormDataFirstName: (state, value) => (state.formData["Name"] = value),
    setFormDataDateOfBirth: (state, value) =>
      (state.formData["Date of birth"] = value),
    setFormDataGender: (state, value) => (state.formData["Gender"] = value),
    setFormDataDateOfBirthDay(state, value) {
      state.dateOfBirthRawValues[0] = value;
      state.formData["Date of birth"] = state.dateOfBirthRawValues.join('.')
    },
    setFormDataDateOfBirthMonth(state, value) {
      console.log("value: ", value);
      state.dateOfBirthRawValues[1] = value;
      state.formData["Date of birth"] = state.dateOfBirthRawValues.join('.')
    },
    setFormDataDateOfBirthYear(state, value) {
      state.dateOfBirthRawValues[2] = value;
      state.formData["Date of birth"] = state.dateOfBirthRawValues.join('.')
    },
    setFormSelectorOptions: (state, value) => (state.formSelectorOptions = value),
    setQuestionHasSelectorOptions: (state, value) => (state.questionHasSelectorOptions = value),
  },
  getters: {
    getFormData: (state) => state.formData,
    getNameValue: (state) => state.formData["Name"],
    getGenderValue: (state) => state.formData["Gender"],
    getDateOfBirthDay: (state) => state.dateOfBirthRawValues[0],
    getDateOfBirthMonth: (state) => state.dateOfBirthRawValues[1],
    getDateOfBirthYear: (state) => state.dateOfBirthRawValues[2],
    getFormSelectorOptions: (state) => state.formSelectorOptions,
    getQuestionHasSelectorOptions: (state) => state.questionHasSelectorOptions,
  },
  actions: {
    updateFormSelectorOptions: (context, value) =>
        context.commit("setFormSelectorOptions", value),
    updateQuestionHasSelectorOptions: (context, value) =>
        context.commit("setQuestionHasSelectorOptions", value),
  },
  modules: {},
});

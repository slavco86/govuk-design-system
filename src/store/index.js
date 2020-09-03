import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      Name: null,
      "Date of birth": null,
      Gender: null,
    },
    dateOfBirthRawValues: {
      day: "",
      month: "",
      year: "",
    },
  },
  mutations: {
    setFormDataFirstName: (state, value) => (state.formData["Name"] = value),
    setFormDataDateOfBirth: (state, value) =>
      (state.formData["Date of birth"] = value),
    setFormDataGender: (state, value) => (state.formData["Gender"] = value),
    setFormDataDateOfBirthDay(state, value) {
      state.dateOfBirthRawValues.day = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        "." +
        state.dateOfBirthRawValues.month +
        "." +
        state.dateOfBirthRawValues.year;
    },
    setFormDataDateOfBirthMonth(state, value) {
      console.log("value: ", value);
      state.dateOfBirthRawValues.month = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        "." +
        state.dateOfBirthRawValues.month +
        "." +
        state.dateOfBirthRawValues.year;
    },
    setFormDataDateOfBirthYear(state, value) {
      state.dateOfBirthRawValues.year = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        "." +
        state.dateOfBirthRawValues.month +
        "." +
        state.dateOfBirthRawValues.year;
    },
  },
  getters: {
    getFormData: (state) => state.formData,
    getNameValue: (state) => state.formData["Name"],
    getGenderValue: (state) => state.formData["Gender"],
    getDateOfBirthDay: (state) => state.dateOfBirthRawValues.day,
    getDateOfBirthMonth: (state) => state.dateOfBirthRawValues.month,
    getDateOfBirthYear: (state) => state.dateOfBirthRawValues.year,
    getFormSelectorOptions: (state) => state.formSelectorOptions,
    getQuestionHasSelectorOptions: (state) => state.questionHasSelectorOptions,
  },
  modules: {},
});

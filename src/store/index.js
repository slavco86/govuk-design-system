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
    formErrorIsActive: false
  },
  mutations: {
    setFormErrorIsActive: (state, value) => (state.formErrorIsActive = value),
    setFormDataFirstName: (state, value) => (state.formData["Name"] = value),
    setFormDataDateOfBirth: (state, value) =>
      (state.formData["Date of birth"] = value),
    setFormDataGender: (state, value) => (state.formData["Gender"] = value),
    setFormDataDateOfBirthDay(state, value) {
      state.dateOfBirthRawValues.day = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        " " +
        state.dateOfBirthRawValues.month +
        " " +
        state.dateOfBirthRawValues.year;
    },
    setFormDataDateOfBirthMonth(state, value) {
      state.dateOfBirthRawValues.month = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        " " +
        state.dateOfBirthRawValues.month +
        " " +
        state.dateOfBirthRawValues.year;
    },
    setFormDataDateOfBirthYear(state, value) {
      state.dateOfBirthRawValues.year = value;
      state.formData["Date of birth"] =
        state.dateOfBirthRawValues.day +
        " " +
        state.dateOfBirthRawValues.month +
        " " +
        state.dateOfBirthRawValues.year;
    },
  },
  getters: {
    formErrorIsActive: (state) => state.formErrorIsActive,
    formData: (state) => state.formData,
    nameValue: (state) => state.formData["Name"],
    genderValue: (state) => state.formData["Gender"],
    dateOfBirthDay: (state) => state.dateOfBirthRawValues.day,
    dateOfBirthMonth: (state) => state.dateOfBirthRawValues.month,
    dateOfBirthYear: (state) => state.dateOfBirthRawValues.year,
  },
  actions: {
    updateFormErrorIsActive: (context, value) =>
        context.commit("setFormErrorIsActive", value),
  },
  modules: {},
});

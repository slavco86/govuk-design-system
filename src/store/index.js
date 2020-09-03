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
      state.dateOfBirthRawValues[1] = value;
      state.formData["Date of birth"] = state.dateOfBirthRawValues.join('.')
    },
    setFormDataDateOfBirthYear(state, value) {
      state.dateOfBirthRawValues[2] = value;
      state.formData["Date of birth"] = state.dateOfBirthRawValues.join('.')
    },
  },
  getters: {
    getFormData: (state) => state.formData,
    getNameValue: (state) => state.formData["Name"],
    getGenderValue: (state) => state.formData["Gender"],
    getDateOfBirthDay: (state) => state.dateOfBirthRawValues[0],
    getDateOfBirthMonth: (state) => state.dateOfBirthRawValues[1],
    getDateOfBirthYear: (state) => state.dateOfBirthRawValues[2],
  },
  actions: {},
  modules: {},
});

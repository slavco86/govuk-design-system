import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      'Name': null,
      'Date of birth': null,
      'Gender': null,
    },
  },
  mutations: {
    setFormDataFirstName: (state, value) => (state.formData['Name'] = value),
    setFormDataDateOfBirth: (state, value) =>
      (state.formData['Date of birth'] = value),
    setFormDataGender: (state, value) => (state.formData['Gender'] = value),
  },
  getters: {
    getNameValue: (state) => state.formData['Name'],
    getDOBValue: (state) => state.formData['Date of birth'],
    getGenderValue: (state) => state.formData['Gender'],
  },
  actions: {},
  modules: {},
});

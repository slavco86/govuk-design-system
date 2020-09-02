import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      name: null,
      dateOfBirth: null,
      gender: null,
    },
  },
  mutations: {
    setFormDataFirstName: (state, value) => (state.formData.name = value),
    setFormDataDateOfBirth: (state, value) =>
      (state.formData.dateOfBirth = value),
    setFormDataGender: (state, value) => (state.formData.gender = value),
  },
  getters: {
    getNameValue: (state) => state.formData.name,
    getDOBValue: (state) => state.formData.dateOfBirth,
    getGenderValue: (state) => state.formData.gender,
  },
  actions: {},
  modules: {},
});

export default {
  computed: {
    inputValue: {
      get() {
        const { name } = this.$route;
        switch (name) {
          case "Name":
            return this.$store.getters.getNameValue;
          case "Date of birth":
            return this.$store.getters.getDOBValue;
          case "Gender":
            return this.$store.getters.getGenderValue;
        }
      },
      set(value) {
        const { name } = this.$route;
        switch (name) {
          case "Name":
            this.$store.commit("setFormDataFirstName", value);
            break
          case "Date of birth":
            this.$store.commit("setFormDataDateOfBirth", value);
            break
          case "Gender":
            this.$store.commit("setFormDataGender", value);
        }
      },
    },
  },
};

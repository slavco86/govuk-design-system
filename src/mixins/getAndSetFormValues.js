export default {
  computed: {
    inputValue: {
      get() {
        const { name } = this.$route;
        switch (name) {
          case "Name":
            return this.$store.getters.getNameValue;
          case "Gender":
            return this.$store.getters.getGenderValue;
        }
      },
      set(value) {
        const { name } = this.$route;
        switch (name) {
          case "Name":
            this.$store.commit("setFormDataFirstName", value);
            break;
          case "Gender":
            this.$store.commit("setFormDataGender", value);
        }
      },
    },
    dateOfBirthDay: {
      get() {
        return this.$store.getters.getDateOfBirthDay;
      },
      set(value) {
        this.$store.commit("setFormDataDateOfBirthDay", value);
      },
    },
    dateOfBirthMonth: {
      get() {
        return this.$store.getters.getDateOfBirthMonth;
      },
      set(value) {
        this.$store.commit("setFormDataDateOfBirthMonth", value);
      },
    },
    dateOfBirthYear: {
      get() {
        return this.$store.getters.getDateOfBirthDay;
      },
      set(value) {
        this.$store.commit("setFormDataDateOfBirthYear", value);
      },
    },
  },
};

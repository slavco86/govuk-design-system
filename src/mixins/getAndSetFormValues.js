export default {
  computed: {
    inputValue: {
      get() {
        const { name } = this.$route;
        switch (name) {
          case "Name":
            return this.$store.getters.nameValue;
          case "Gender":
            return this.$store.getters.genderValue;
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
    dateDay: {
      get() {
        if (this.$route.name === "Date of birth") {
          return this.$store.getters.dateOfBirthDay;
        }
      },
      set(value) {
        if (this.$route.name === "Date of birth") {
          this.$store.commit("setFormDataDateOfBirthDay", value);
        }
      },
    },
    dateMonth: {
      get() {
        if (this.$route.name === "Date of birth") {
          return this.$store.getters.dateOfBirthMonth;
        }
      },
      set(value) {
        if (this.$route.name === "Date of birth") {
          this.$store.commit("setFormDataDateOfBirthMonth", value);
        }
      },
    },
    dateYear: {
      get() {
        if (this.$route.name === "Date of birth") {
          return this.$store.getters.dateOfBirthYear;
        }
      },
      set(value) {
        if (this.$route.name === "Date of birth") {
          this.$store.commit("setFormDataDateOfBirthYear", value);
        }
      },
    },
  },
};

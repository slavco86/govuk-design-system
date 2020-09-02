export default {
    methods: {
        getNextRoute() {
            const { name } = this.$route;
            switch (name) {
                case "Name":
                    return "Date of Birth";
                case "Date of Birth":
                    return "Gender";
            }
        },
       navigateToNextQuestion() {
           this.$router.push({ name: this.getNextRoute() })
        },
    }
};

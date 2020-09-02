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
        getPreviousRoute() {
            const { name } = this.$route;
            switch (name) {
                case "Gender":
                    return "Date of Birth";
                case "Date of Birth":
                    return "Name";
            }
        },
       navigateToNextRoute() {
           this.$router.push({ name: this.getNextRoute() })
        },
        navigateToPreviousRoute() {
            this.$router.push({ name: this.getPreviousRoute() })
        },
    }
};

export default {
    methods: {
        getNextRoute() {
            const { name } = this.$route;
            switch (name) {
                case "Name":
                    return "Date of Birth";
                case "Date of Birth":
                    return "Gender";
                case "Gender":
                    return "Summary List";
            }
        },
        getPreviousRoute() {
            const { name } = this.$route;
            switch (name) {
                case "Summary List":
                    return "Gender";
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

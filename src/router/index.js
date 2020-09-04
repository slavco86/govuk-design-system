import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Questions from "../views/Questions.vue";
import SummaryList from "../views/SummaryList.vue";
import GovukFieldset from "../components/GovukFieldset.vue";
import GovukFormGroup from "../components/GovukFormGroup.vue";
import GovukInput from "../components/GovukInput.vue";
import GovukDateInput from "../components/GovukDateInput.vue";
import GovukRadios from "../components/GovukRadios.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        redirect: "/name",
        component: Questions,
        children: [
          {
            path: "/name",
            component: GovukFieldset,
            children: [
              {
                path: "/name",
                component: GovukFormGroup,
                children: [
                  {
                    path: "/name",
                    name: "Name",
                    component: GovukInput,
                  },
                ]
              },
            ]
          },

          {
            path: "/date-of-birth",
            component: GovukFieldset,
            children: [
              {
                path: "/date-of-birth",
                component: GovukFormGroup,
                children: [
                  {
                    path: "/date-of-birth",
                    name: "Date of birth",
                    component: GovukDateInput,
                  },
                ]
              },
            ]
          },
          {
            path: "/gender",
            component: GovukFieldset,
            children: [
              {
                path: "/gender",
                component: GovukFormGroup,
                children: [
                  {
                    path: "/gender",
                    name: "Gender",
                    component: GovukRadios,
                  },
                ]
              },
            ]
          },
        ],
      },
      {
        path: "/summary-list",
        name: "Summary List",
        component: SummaryList,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

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
            props: true,
            children: [
              {
                path: "/name",
                component: GovukFormGroup,
                props: true,
                children: [
                  {
                    path: "/name",
                    name: "Name",
                    component: GovukInput,
                    props: true,
                  },
                ]
              },
            ]
          },

          {
            path: "/date-of-birth",
            component: GovukFieldset,
            props: true,
            children: [
              {
                path: "/date-of-birth",
                component: GovukFormGroup,
                props: true,
                children: [
                  {
                    path: "/name",
                    name: "Date of birth",
                    component: GovukDateInput,
                    props: true,
                  },
                ]
              },
            ]
          },
          {
            path: "/gender",
            component: GovukFieldset,
            props: true,
            children: [
              {
                path: "/gender",
                component: GovukFormGroup,
                props: true,
                children: [
                  {
                    path: "/name",
                    name: "Gender",
                    component: GovukRadios,
                    props: true,
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

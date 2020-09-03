import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Questions from "../views/Questions.vue";
import SummaryList from "../views/SummaryList.vue";
import GovukFieldset from "../components/GovukFieldset.vue";

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
            name: "Name",
            component: GovukFieldset,
            props: true,
          },
          {
            path: "/date-of-birth",
            name: "Date of Birth",
            component: GovukFieldset,
            props: true,
          },
          {
            path: "/gender",
            name: "Gender",
            component: GovukFieldset,
            props: true,
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

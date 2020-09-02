import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Questions from '../views/Questions.vue'
import GovukFieldset from '../components/GovukFieldset.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "/",
        name: "Questions",
        component: Questions,
        children: [
          {
            path: "/",
            name: "Name",
            component: GovukFieldset,
            props: true
          },
          {
            path: "/date-of-birth",
            name: "Date of Birth",
            component: GovukFieldset,
            props: true
          },
          {
            path: "/gender",
            name: "Gender",
            component: GovukFieldset,
            props: true
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
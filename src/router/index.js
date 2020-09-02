import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Questions from '../views/Questions.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "/",
        name: "Questions",
        component: Questions
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
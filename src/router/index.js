import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import FilterById from '../components/FilterById.vue'
import FilterByColour from '../components/FilterByColour.vue'
import FilterByGender from '../components/FilterByGender.vue'
import SignupView from '../components/SignupView.vue'


const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/filterById',
    name: 'filterById',
    component: FilterById
  },
  {
    path:'/filterByColour',
    name:'filterByColour',
    component:FilterByColour
  },
  {
    path:'/filterByGender',
    name:'filterByGender',
    component:FilterByGender
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
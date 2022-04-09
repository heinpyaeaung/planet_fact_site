import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Earth from '../views/earth'
import Mars from '../views/mars'
import Mercury from '../views/mercury'
import Neptune from '../views/neptune'
import Saturn from '../views/saturn'
import Uranus from '../views/uranus'
import Venus from '../views/venus'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/jupiter',
    name: 'Jupiter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/jupiter')
  },
  {
    path: '/mars',
    name: 'Mars',
    component: Mars
  },
  {
    path: '/mercury',
    name: 'Mercury',
    component: Mercury,
  },
  { 
    path: '/neptune',
    name: 'Neptune',
    component: Neptune 
  },
  { 
    path: '/saturn',
    name: 'Saturn',
    component: Saturn 
  },
  { 
    path: '/uranus',
    name: 'Uranus',
    component: Uranus 
  },
  { 
    path: '/venus',
    name: 'Venus',
    component: Venus 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

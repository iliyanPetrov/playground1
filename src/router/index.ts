import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage/index.vue';
import BuyPage from '../views/BuyPage/index.vue';
import SellPage from '../views/SellForm/index.vue';
import RentPage from '../views/RentPage/index.vue';
import NotFoundPage from '../views/NotFoundPage/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/sell',
      name: 'sell',
      component: SellPage
    },
    {
      path: '/buy',
      name: 'buy',
      component: BuyPage
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentPage
    },
    {
      path: "/*",
      name: 'not-found',
      component: NotFoundPage

    }
]
})

export default router



// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')
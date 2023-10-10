import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'The Password Game'
    },
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    meta: {
      title: 'The Password Game'
    },
    component: Game
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router

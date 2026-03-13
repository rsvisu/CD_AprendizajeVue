import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from "@/views/ContactView.vue";
import Page1View from "@/views/examples/Page1View.vue";
import Page2View from "@/views/examples/Page2View.vue";
import Page3View from "@/views/examples/Page3View.vue";
import Page4View from "@/views/examples/Page4View.vue";
import QuizView from "@/views/examples/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/examples/page1',
      name: 'ex1',
      component: Page1View,
    },
    {
      path: '/examples/page2',
      name: 'ex2',
      component: Page2View,
    },
    {
      path: '/examples/page3',
      name: 'ex3',
      component: Page3View,
    },
    {
      path: '/examples/page4',
      name: 'ex4',
      component: Page4View,
    },
    {
      path: '/examples/quiz',
      name: 'quiz',
      component: QuizView,
    },
  ],
})

export default router

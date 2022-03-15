import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
// import DashboardView from "@/views/DashboardView.vue";
// import SignupView from "@/views/SignupView.vue";
// import LoginView from "@/views/LoginView.vue";
// import ProjectsView from "@/views/ProjectsView.vue";
// import ProjectDetailView from "@/views/ProjectDetailView.vue";

import { Auth } from 'aws-amplify';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
  },
  {
    path: "/project/:id",
    name: "ProjectDetailView",
    component: ProjectDetailView,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignupView,
  },
  {
    path: '/login',
    name: 'Log In',
    component: LoginView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next()
  }

})
export default router;

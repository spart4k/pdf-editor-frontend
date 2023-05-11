import VueRouter from "vue-router";
import Generator from '@/views/Generator/Default'

const routes = [
  {
    path: "/",
    name: "Generator",
    component: Generator,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

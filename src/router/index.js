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
  base: '/doc-editor',
  routes,
});

export default router;

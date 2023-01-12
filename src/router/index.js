import { createRouter, createWebHashHistory } from "vue-router";
import CodewarsView from "../views/CodewarsView.vue";
import GithubView from "../views/GithubView.vue";
const routes = [
  {
    path: "/",
    name: "codewars",
    component: CodewarsView,
  },
  {
    path: "/github",
    name: "github",
    component: GithubView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", name: "skill-items", component: Skills },
    { path: "/about/:name", name: "about-page", component: About },
  ],
});

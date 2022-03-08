import Vue from "vue";
import VueRouter from "vue-router";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "./", name: "skills", component: Skills },
    { path: "./about", name: "about", component: About },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/app.vue';
import Home from "./components/home.vue";
import Toplist from "./components/toplist.vue";
import Search from "./components/search.vue";
import "../stylesheets/style.scss";

Vue.use(VueRouter);

const routes = [
  { path:"/home", component: Home },
  { path:"/toplist", component: Toplist },
  { path: "/search", component: Search }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: (h)=>{return h(App)}
}).$mount('#app');

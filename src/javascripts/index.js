// import Vue from 'vue/dist/vue.common';
import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from "./components/home.vue";
import Toplist from "./components/toplist.vue";
import "../stylesheets/style.scss";

const routes = {
  '/': Home,
  '/toplist': Toplist
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app');

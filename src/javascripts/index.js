// import Vue from 'vue/dist/vue.common';
import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from "./components/home.vue";
import "../stylesheets/style.scss";


const NotFound = { template: '<p>Page not found</p>' }
// const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/home': About
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

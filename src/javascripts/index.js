import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/app.vue';
import Home from "./components/home.vue";
import Toplist from "./components/toplist.vue";
import Search from "./components/search.vue";
import Topiclist from "./components/topiclist.vue";
import HomeContainer from "./components/home_container.vue";

import "../stylesheets/style.scss";
import "../stylesheets/iconfont.scss";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "", component: HomeContainer,
    children:[
      {
        path: "/home",
        component: Home
      },{
        path: "/toplist",
        component: Toplist
      },{
        path: "/search",
        component: Search
      }
    ]},
  { path: "/topiclist/:id", component: Topiclist }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: (h)=>{return h(App)}
}).$mount('#app');

if("serviceWorker" in navigator ) {
  window.addEventListener('load', function (){
    navigator.serviceWorker.register("http://127.0.0.1:3000/sw.js", { scope: "/" })
    .then(function(registration){
      
    }).catch(function(error){
      
    })
  })
}

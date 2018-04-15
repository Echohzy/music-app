import Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router'
import Home from "./components/home.vue";

const NotFound = { template: '<p>Page not found</p>' }
// const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/home': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// Vue.use(VueRouter)
// // Vue.config.productionTip = false
// const routes = [
//   { path: "/", component: Home}
// ];
// const router = new VueRouter({
//   routes
// });
// new Vue({
//   router
// }).$mount('#app');

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')



// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!'
//   }
// })
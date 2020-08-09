import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Test from './components/test'
import Hello from './components/HelloWorld'
const myRoutes = [
  {
    path : "/",
    component : Hello
  } ,{
    path : "/home",
    component : Test
  }
]
const router = new VueRouter({
  //routes : routes
  routes : myRoutes,
  // mode:'history'
});


export default router


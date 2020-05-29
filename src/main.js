import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios({
// 	url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res =>{
// 	console.log(res)
// })

// import {request} from "./network/request.js"
// request({
// 	url:'http://123.207.32.32:8000/home/multidata'
// }).then(res =>{
// 	console.log(res)
// })
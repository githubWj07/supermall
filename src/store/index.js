import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
	state: {
		cartList: []
	},
	//修改store里的东西都需要经过mutations
	mutations: {
		addCart(state, payload){
			// let oldProduct = null;
			// for(let item of state.cartList){
			// 	if(item.iid === payload.iid){
			// 		oldProduct = item
			// 	}
			// }
			//数组find()方法
			let oldProduct = state.cartList.find(function(item){
				return item.iid === payload.iid
			})
			if(oldProduct){
				oldProduct.count += 1;
			}else {
				payload.count = 1;
				payload.checked = true;
				state.cartList.push(payload)
			}
			// state.cartList.push(payload)
			// console.log(payload);
		}
	}
})

//3.挂载
export default store
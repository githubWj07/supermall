import {request} from './request'

//请求多个数据（banner,类目）
export function getHomeMulitData(){
	return request({
		url:'/home/multidata'
	})
}

//请求商品数据
export function getHomeGoods(type, page){
	return request({
		url:'/home/data',
		params: {
			type,
			page
		}
	})
}
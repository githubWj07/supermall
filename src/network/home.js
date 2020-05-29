import {request} from './request'

export function getHomeMulitData(){
	return request({
		url:'/home/multidata'
	})
}
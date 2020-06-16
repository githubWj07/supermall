import {request} from './request'

//请求详情
export function getDetail(iid){
	return request({
		url:'/detail',
		params: {
			iid
		}
	})
}

export class Goods {
	constructor(itemInfo, columns, shopInfo) {
	    this.title = itemInfo.title;
		this.price = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.columns = columns;
		this.services = shopInfo.services;
	}
}

export class Shop {
	constructor(shopInfo) {
	    this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}

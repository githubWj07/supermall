<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #nav-center>
				<div>购物街</div>
			</template>
		</nav-bar>
<<<<<<< HEAD
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
		<home-feature />
		<tab-control class="tab-control" 
					 :titles="['流行','新款','精选']"
					 @tabItemClick="tabItemClick" />
		<goods-list :goods="goods[currentType].list"></goods-list>
	</div>
	
</template>currentType
=======
		<scroll class="content">
			<home-swiper :banners="banners"></home-swiper>
			<home-recommend :recommends="recommends"></home-recommend>
			<home-feature />
			<tab-control class="tab-control" 
						 :titles="['流行','新款','精选']"
						 @tabItemClick="tabItemClick" />
			<goods-list :goods="goods[currentType].list"></goods-list>
		</scroll>
	</div>
</template>
>>>>>>> ffd7cf776aeac2371805e31f3c7a2847f661155e

<script>
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "../../components/common/scroll/Scroll.vue";
	import TabControl from "components/content/tabControl/TabControl";
	import GoodsList from "components/content/goodsList/GoodsList";
	
	import HomeSwiper from "./childComp/HomeSwiper";
	import HomeRecommend from "./childComp/HomeRecommend";
	import HomeFeature from "./childComp/HomeFeature";
	
	import {getHomeMulitData,getHomeGoods} from "network/home";
	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list:[]},
					'new': {page: 0, list:[]},
					'sell': {page: 0, list:[]}
				},
				currentType: 'pop'
			}
		},
		components: {
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			HomeSwiper,
			HomeRecommend,
			HomeFeature
		},
		created() {
			//请求多个数据（banner,类目）
			this.getHomeMulitData()
			
			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods: {
			tabItemClick(index){
				switch(index){
<<<<<<< HEAD
					case 0: 
					this.currentType = 'pop'
					break;
					case 1:
					this.currentType = 'new'
					break;
					case 2:
					this.currentType = 'sell'
					break;
					
				}
=======
					case 0:
					this.currentType = 'pop';
					break;
					case 1:
					this.currentType = 'new';
					break;
					case 2:
					this.currentType = 'sell';
					break;
				}
				console.log(index);
>>>>>>> ffd7cf776aeac2371805e31f3c7a2847f661155e
			},
			//请求多个数据（banner,类目）
			getHomeMulitData(){
				getHomeMulitData().then(res => {
					this.banners = res.data.data.banner.list;
					this.recommends = res.data.data.recommend.list;
				})
			},
			//请求商品数据
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list);//将数值保存在list中
					this.goods[type].page += 1;//page加1
					console.log(res)
				})
			}
		}
	} 
</script>

<style lang="less" scoped>
	#home {
		// padding-top: 44px;
		position: relative;
		height: 100vh;
	}
	.home-nav {
		color: #fff;
		background-color: deeppink;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.tab-control {
		position: sticky;
		top: 44px;
		z-index: 9;
	}
	.content {
		// height: 300px;
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
	}
</style>

<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #nav-center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
		<home-feature />
		<tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
	</div>
	
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tabControl/TabControl";
	
	import HomeSwiper from "./childComp/HomeSwiper";
	import HomeRecommend from "./childComp/HomeRecommend";
	import HomeFeature from "./childComp/HomeFeature";
	
	import {getHomeMulitData} from "network/home";
	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				dKeywords:[],
				keywords: [],
				recommends: []
			}
		},
		components: {
			NavBar,
			TabControl,
			HomeSwiper,
			HomeRecommend,
			HomeFeature
		},
		created() {
			getHomeMulitData().then(res => {
				this.banners = res.data.data.banner.list;
				this.dKeywords = res.data.data.dKeyword.list;
				this.keywords = res.data.data.keywords.list;
				this.recommends = res.data.data.recommend.list;
				console.log(res)
			})
		}
	} 
</script>

<style>
	#home {
		padding-top: 44px;
		padding-bottom: 50px;
	}
	.home-nav {
		color: #fff;
		background-color: deeppink;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.tab-control {
		position: sticky;
		top: 44px;
	}
</style>

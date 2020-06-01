<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #nav-center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
	</div>
	
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import HomeSwiper from "./childComp/HomeSwiper";
	import HomeRecommend from "./childComp/HomeRecommend";
	
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
			HomeSwiper,
			HomeRecommend
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
	}
	.home-nav {
		color: #fff;
		background-color: deeppink;
	}
</style>

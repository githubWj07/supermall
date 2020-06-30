<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #nav-center>
				<div>购物街</div>
			</template>
		</nav-bar>
		<tab-control class="tab-control-top"
					 :titles="['流行','新款','精选']"
					 @tabItemClick="tabItemClick" 
					 ref="tabControl1" 
					 v-show="isTabShow"/>
		<scroll class="content" 
				ref="scroll" 
		        :probeType="3" 
				@scroll="contentScroll"
				:pull-up-load="true"
				@pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
			<home-recommend :recommends="recommends" />
			<home-feature />
			<tab-control class="tab-control-bot" 
						 :titles="['流行','新款','精选']"
						 @tabItemClick="tabItemClick" 
						 ref="tabControl2" />
			<goods-list :goods="goods[currentType].list" />
		</scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll.vue";
	import TabControl from "components/content/tabControl/TabControl";
	import GoodsList from "components/content/goodsList/GoodsList";
	// import BackTop from "components/content/backTop/BackTop";
	
	import HomeSwiper from "./childComp/HomeSwiper";
	import HomeRecommend from "./childComp/HomeRecommend";
	import HomeFeature from "./childComp/HomeFeature";
	
	import {getHomeMulitData,getHomeGoods} from "network/home";
	
	import {imgRefrashMixin,scrollTopMixin} from '../../common/mixins.js'
	export default {
		name: 'Home',
		mixins: [imgRefrashMixin,scrollTopMixin],
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list:[]},
					'new': {page: 0, list:[]},
					'sell': {page: 0, list:[]}
				},
				currentType: 'pop',
				// isShowBackTop: false,
				tabOffsetTop: 0,
				isTabShow: false,
				saveY: 0,
				itemImgLister: null
			}
		},
		components: {
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			// BackTop,
			HomeSwiper,
			HomeRecommend,
			HomeFeature
		},
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveY, 0)
			this.$refs.scroll.refresh();
		},
		deactivated() {
			//保存Y值
			this.saveY = this.$refs.scroll.scroll.y
			
			//取消全局的事件监听
			this.$bus.$off('itemImgLoad',this.itemImgLister)
		},
		created() {
			//请求多个数据（banner,类目）
			this.getHomeMulitData()
			
			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		// mounted() {
		// 	//请求数据列表后刷新
		// 	this.itemImgLister = ()=> {
		// 		// console.log(this.$refs.scroll.refresh()
				
		// 		this.$refs.scroll.refresh();
		// 	}
		// 	this.$bus.$on('itemImgLoad',this.itemImgLister);
		// },
		methods: {
			tabItemClick(index){
				switch(index){
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
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
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
					this.$refs.scroll.finishPullUp()
				})
			},
			// backTop(){
			// 	//返回顶部
			// 	// this.$refs.scroll.scroll.scrollTo(0,0,500);
			// 	this.$refs.scroll.scrollTo(0,0);
			// },
			contentScroll(position){
				//返回顶部是否显示
				this.isShowBackTop = (-position.y) > 500;
				this.isTabShow = (-position.y) > this.tabOffsetTop;
			},
			loadMore() {
				//下拉加载更多
				this.getHomeGoods(this.currentType);
				// this.$refs.scroll.scroll.refresh();
			},
			swiperImgLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
				// console.log(this.tabOffsetTop);
			}
		}
	} 
</script>

<style lang="less" scoped>
	#home {
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
	.tab-control-top {
		position: relative;
		top: 44px;
		z-index: 9;
	}
	.content {
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
	}
</style>
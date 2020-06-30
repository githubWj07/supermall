<template>
	<div class="detail">
		<detail-tab-bar class="top-nav" @titleClick="titleClick" ref="nav"></detail-tab-bar>
		<scroll class="content" 
			ref="scroll"
			:probeType="3" 
			@scroll="contentScroll">
			<detail-swiper :banners="topBnner"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
			<detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
			<detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
			<!-- 组件复用 -->
			<goods-list :goods="recommendInfo" ref="recommend"></goods-list>
		</scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
		<detail-bot-bar></detail-bot-bar>
	</div>
</template>

<script>
	import Scroll from "components/common/scroll/Scroll.vue";
	import BackTop from "components/content/backTop/BackTop.vue";
	import GoodsList from "components/content/goodsList/GoodsList";
	
	import DetailTabBar from './childCopm/DetailTabBar.vue'
	import DetailSwiper from './childCopm/DetailSwiper.vue'
	import DetailBaseInfo from './childCopm/DetailBaseInfo.vue'
	import DetailShopInfo from './childCopm/DetailShopInfo.vue'
	import DetailGoodsInfo from './childCopm/DetailGoodsInfo.vue'
	import DetailParamInfo from './childCopm/DetailParamInfo.vue'
	import DetailCommentInfo from './childCopm/DetailCommentInfo.vue'
	import DetailBotBar from "./childCopm/DetailBotBar.vue"
	// import DetailRecommendInfo from './childCopm/DetailRecommendInfo.vue'
	
	import {getDetail, Goods, Shop, Param, getRecommend} from 'network/detail.js'
	export default {
		name: 'Detail',
		components: {
			Scroll,
			BackTop,
			DetailTabBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailBotBar,
			// DetailRecommendInfo
			GoodsList
		},
		data() {
			return {
				iid: null,
				topBnner: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: [],
				recommendInfo: [],
				isShowBackTop: false,
				themeTopY: [],
				currentIndex: 0
			}
		},
		created() {
			//保存传入的id
			this.iid = this.$route.params.iid
			
			//根据iid请求详情数据
			getDetail(this.iid).then(res => {
				// console.log(res)
				const data = res.data.result;
				//1.获取顶部banner
				this.topBnner = data.itemInfo.topImages
				//2.获取商品详情
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
				//3.获取商家详情
				this.shop = new Shop(data.shopInfo)
				//4.获取商家详情图片
				this.detailInfo = data.detailInfo
				//5.获取参数信息
				this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
				//6.获取评论信息
				if(data.rate.cRate !== 0){
					this.commentInfo = data.rate.list
				}
			})
			//请求推荐数据
			getRecommend().then(res => {
				console.log(res)
				this.recommendInfo = res.data.data.list
			})
		},
		methods: {
			backTop(){
				//返回顶部
				this.$refs.scroll.scrollTo(0,0);
			},
			goodsImgLoad() {
				this.$refs.scroll.refresh();
				this.themeTopY=[];
				this.themeTopY.push(0);
				this.themeTopY.push(this.$refs.param.$el.offsetTop);
				this.themeTopY.push(this.$refs.comment.$el.offsetTop);
				this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
				this.themeTopY.push(Number.MAX_VALUE);
			},
			titleClick(index){
				this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 1000)
			},
			contentScroll(position){
				//返回顶部是否显示
				this.isShowBackTop = (-position.y) > 500;
				const positionY = -position.y;
				let _length = this.themeTopY.length;
				for (let i=0; i<_length-1; i++){
					if(this.themeTopY !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
						this.currentIndex = i;
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail {
		height: 100vh;
		background-color: #fff;
		position: relative;
		z-index: 10;
	}
	.top-nav {
		background-color: #fff;
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		z-index: 11;
	}
	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>

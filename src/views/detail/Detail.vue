<template>
	<div class="detail">
		<detail-tab-bar class="top-nav"></detail-tab-bar>
		<scroll class="content" 
			ref="scroll"
			:probeType="3" 
			@scroll="contentScroll">
			<detail-swiper :banners="topBnner"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
			<detail-param-info :paramInfo="paramInfo"></detail-param-info>
		</scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
	</div>
</template>

<script>
	import Scroll from "components/common/scroll/Scroll.vue";
	import BackTop from "components/content/backTop/BackTop";
	
	import DetailTabBar from './childCopm/DetailTabBar.vue'
	import DetailSwiper from './childCopm/DetailSwiper.vue'
	import DetailBaseInfo from './childCopm/DetailBaseInfo.vue'
	import DetailShopInfo from './childCopm/DetailShopInfo.vue'
	import DetailGoodsInfo from './childCopm/DetailGoodsInfo.vue'
	import DetailParamInfo from './childCopm/DetailParamInfo.vue'
	
	import {getDetail, Goods, Shop, Param} from 'network/detail.js'
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
			DetailParamInfo
		},
		data() {
			return {
				iid: null,
				topBnner: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo:{},
				isShowBackTop: false
			}
		},
		created() {
			//保存传入的id
			this.iid = this.$route.params.iid
			
			//根据iid请求详情数据
			getDetail(this.iid).then(res => {
				console.log(res)
				const data = res.data.result;
				//1.获取顶部banner
				this.topBnner = data.itemInfo.topImages
				//2.获取商品详情
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
				//3.获取商家详情
				this.shop = new Shop(data.shopInfo)
				//4.获取商家详情图片
				this.detailInfo = data.detailInfo
				//获取参数信息
				this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
			})
		},
		methods: {
			backTop(){
				//返回顶部
				this.$refs.scroll.scrollTo(0,0);
			},
			contentScroll(position){
				//返回顶部是否显示
				this.isShowBackTop = (-position.y) > 500;
			},
			goodsImgLoad() {
				this.$refs.scroll.refresh()
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
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 11;
	}
	.content {
		position: absolute;
		top: 44px;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>

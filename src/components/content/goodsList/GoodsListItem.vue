<template>
	<div class="goods-list-item" @click="itemLink">
		<img :src="goodsItem.show.img" class="goods-list-img" @load="itemImgLoad">
		<div class="goods-list-text">
			<div class="goods-list-name one-txt-cut">{{goodsItem.title}}</div>
			<div class="goods-list-price">
				<div class="text-pink">{{goodsItem.price}}</div>
				<div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			itemImgLoad() {
				this.$bus.$emit('itemImgLoad');
				// console.log('imgLoad');
			},
			itemLink() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-list-item {
		width: 45%;
		height: auto;
		.goods-list-img{
			width: 100%;
			height: auto;
			margin-bottom: 6px;
			border-radius: 4px;
		}
		.goods-list-price {
			display: flex;
			justify-content: space-between;
			margin: 6px 0;
			.collect-icon {
				display: inline-block;
				width: 20px;
				height: 20px;
				background: url(~assets/images/home/collect_icon.png) no-repeat;
				background-size: cover;
				vertical-align: bottom;
			}
		}
	}
</style>

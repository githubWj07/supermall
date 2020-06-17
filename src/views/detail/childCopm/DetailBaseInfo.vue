<template>
	<div v-if="Object.keys(goods).length !== 0">
		<div class="title">{{goods.title}}</div>
		<div class="price-wrap">
			<div class="new-price">{{goods.price}}</div>
			<div class="old-price">{{goods.oldPrice}}</div>
			<div class="discount-desc" v-if="goods.discountDesc">{{goods.discountDesc}}</div>
		</div>
		<div class="other-info">
			<div>{{goods.columns[0]}}</div>
			<div>{{goods.columns[1]}}</div>
			<div>{{goods.services[goods.services.length-1].name}}</div>
		</div>
		<div class="serves-wrap">
			<div v-for="index in goods.services.length-1" :key="index"> 
				<img :src="goods.services[index-1].icon" alt=""> 
				{{goods.services[index-1].name}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBaseInfo',
		props: {
			goods: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.title {
		margin: 10px 0;
		padding: 0 4px;
		font-size: 14px;
		line-height: 20px;
	}
	.price-wrap {
		display: flex;
		padding:0 4px 10px;
		.new-price {
			color: var(--color-high-text)
		}
		.old-price {
			color: #999;
			font-size: 12px;
			margin: 0 4px;
			text-decoration: line-through;
		}
		.discount-desc {
			color: #fff;
			font-size: 12px;
			border-radius: 100px;
			padding: 2px 6px;
			background-color: var(--color-high-text);
		}
	}
	.other-info {
		display: flex;
		color: #999;
		font-size: 12px;
		padding: 10px 4px;
		border-bottom: 1px solid #ededed;
		border-top: 1px solid #ededed;
		div {
			flex: 1;
		}
	}
	.serves-wrap {
		display: flex;
		font-size: 12px;
		color: #333;
		padding: 10px 4px;
		justify-content: space-between;
		border-bottom: 4px solid #ededed;
		img {
			width: 12px;
			height: 12px;
			vertical-align: middle;
		}
	}
</style>

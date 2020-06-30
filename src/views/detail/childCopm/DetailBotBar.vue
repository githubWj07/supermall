<template>
<<<<<<< HEAD
	<div class="flex bot-bar-wrap">
		<div class="bot-bar-item">
			<p><img src="~assets/images/detail/icon01.png" alt=""></p>
			<p>客服</p>
		</div>
		<div class="bot-bar-item">
			<p><img src="~assets/images/detail/icon02.png" alt=""></p>
			<p>店铺</p>
		</div>
		<div class="bot-bar-item">
			<p><img src="~assets/images/detail/icon03.png" alt=""></p>
			<p>收藏</p>
		</div>
		<div class="btn cart-btn">加入购购物车</div>
		<div class="btn buy-btn">购买</div>
=======
	<div class="detail-bot-bar flex">
		<div class="bot-bar-item">
			<p>客服</p>
		</div>
		<div class="bot-bar-item">
			<p>店铺</p>
		</div>
		<div class="bot-bar-item">
			<p>收藏</p>
		</div>
		<div class="bot-bar-btn bot-bar-cert" @click="addCart">加入购物车</div>
		<div class="bot-bar-btn bot-bar-buy">购买</div>
>>>>>>> 19d9bbd45c37d69a29d76680caa799c9bd9af8a4
	</div>
</template>

<script>
	export default {
<<<<<<< HEAD
		name: 'DetailBotBar'
=======
		name: "DetailBotBar",
		methods: {
			addCart() {
				this.$emit('addCart')
			}
		}
>>>>>>> 19d9bbd45c37d69a29d76680caa799c9bd9af8a4
	}
</script>

<style lang="less" scoped>
<<<<<<< HEAD
	.bot-bar-wrap {
		height: 49px;
=======
	.detail-bot-bar {
>>>>>>> 19d9bbd45c37d69a29d76680caa799c9bd9af8a4
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
<<<<<<< HEAD
		.bot-bar-item {
			width: 16%;
			font-size: 12px;
			color: #333;
			text-align: center;
			img{
				width: 24px;
				height: 24px;
				margin: 4px 0;
				vertical-align: middle;
			}
		}
		.btn {
			width: 26%;
			text-align: center;
			line-height: 49px;
		}
		.cart-btn {
			background-color: #F9CD0B;
		}
		.buy-btn {
=======
		box-shadow: 0 0 4px 4px #ececec;
		z-index: 20;
		line-height: 49px;
		.bot-bar-item {
			width: 16%;
			font-size: 12px;
			text-align: center;
		}
		.bot-bar-btn {
			width: 26%;
			font-size: 14px;
			text-align: center;
		}
		.bot-bar-cert {
			background-color: #F9CD0B;
		}
		.bot-bar-buy {
>>>>>>> 19d9bbd45c37d69a29d76680caa799c9bd9af8a4
			color: #fff;
			background-color: var(--color-high-text);
		}
	}
<<<<<<< HEAD
	
=======
>>>>>>> 19d9bbd45c37d69a29d76680caa799c9bd9af8a4
</style>

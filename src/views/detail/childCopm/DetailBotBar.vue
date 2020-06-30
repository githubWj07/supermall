<template>
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
	</div>
</template>

<script>
	export default {
		name: "DetailBotBar",
		methods: {
			addCart() {
				this.$emit('addCart')
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-bot-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
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
			color: #fff;
			background-color: var(--color-high-text);
		}
	}
</style>

<template>
	<div class="detail-bot-bar flex">
		<!-- 底部 -->
		<div>我的</div>
		<div>收藏</div>
		<div>加入购物车</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBotBar",
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
		justify-content: center;
		align-items: center;
		div{
			flex: 1
		}
	}
</style>

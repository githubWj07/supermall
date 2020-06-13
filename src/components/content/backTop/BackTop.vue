<template>
	<div class="back-top">
		<img src="~assets/images/back-top_icon.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
		methods: {
		}
	}
</script>

<style lang="less" scoped>
	.back-top {
		position: absolute;
		bottom: 55px;
		right: 10px;
		z-index: 6;
		img {
			width: 43px;
			height: 43px;
		}
	}
</style>

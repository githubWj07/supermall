<template>
	<div class="back-top">
		<img src="~assets/images/back-top.png" />
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
		img {
			width: 30px;
			height: 30px;
		}
		position: fixed;
		bottom: 55px;
		right: 10px;;
	}
</style>
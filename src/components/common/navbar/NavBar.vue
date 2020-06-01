<template>
	<div class="tab-nav">
		<div class="nav-left"><slot name="nav-left"></slot></div>
		<div class="nav-center"><slot name="nav-center"></slot></div>
		<div class="nav-right"><slot name="nav-right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style lang="less" scoped>
	.tab-nav {
		height: 44px;
		line-height: 44px;
		display: flex;
		text-align: center;
		.nav-left {
			width: 70px;
		}
		.nav-center {
			flex: 1;
		}
		.nav-right {
			width: 70px;
		}
	}
</style>

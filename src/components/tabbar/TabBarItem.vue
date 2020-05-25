<template>
	<div class="tab-bar-item">
		<slot name="item-icon"></slot>
		<slot name="item-text"></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem'
	}
</script>

<style lang="less" scoped>
	
	.tab-bar-item {
		flex: 1;
		text-align: center;
		img {
			width: 22px;
			height: 22px;
			margin: 4px 0;
			vertical-align: middle;
		}
	}
	
</style>

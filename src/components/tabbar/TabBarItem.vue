<template>
	<div class="tab-bar-item" @click="itemLink">
		<slot name="item-icon"></slot>
		<slot name="item-icon-active"></slot>
		<slot name="item-text"></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String
		},
		methods: {
			itemLink() {
				this.$router.push(this.path)
			}
		}
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

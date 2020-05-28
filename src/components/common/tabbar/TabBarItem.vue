<template>
	<div class="tab-bar-item" @click="itemLink">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
		<div :style="activeColor"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeStyle: {
				type: String,
				default: 'red'
			}
		},
		data(){
			return {}
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeColor(){
				return this.isActive ? {color: this.activeStyle} : {}
			}
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

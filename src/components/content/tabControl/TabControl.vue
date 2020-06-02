<template>
	<div class="tab-control-wrap">
		<div class="tab-control-item" 
			 v-for="(item,index) in titles"
			 :class="{active: index === currentIndex}"
			 @click="tabItemClick(index)"
		>
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			tabItemClick(index) {
				this.currentIndex = index;
				this.$emit('tabItemClick',index)
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab-control-wrap {
		display: flex;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		text-align: center;
		background-color: #fff;
		.tab-control-item {
			flex: 1;
			&.active{
				color: var(--color-text);
				span {
					border-bottom: 2px solid var(--color-text);
					padding: 5px;
				}
			}
			
		}
	}
</style>

<template>
	<div class="goods-list">
		<goods-list-item v-for="item in goods" :goodsItem="item" />
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem'
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			GoodsListItem
		}
	}
</script>

<style lang="less" scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
	}
</style>

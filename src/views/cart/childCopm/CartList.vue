<template>
	<div class="cart-list-wrap">
		<cart-list-item :cartList="cartList"></cart-list-item>
	</div>
</template>

<script>
	import CartListItem from './CartListItem.vue'
	export default {
		name: "CartList",
		computed: {
			cartList() {
				return this.$store.state.cartList;
			}
		},
		components:{
			CartListItem
		}
	}
</script>

<style lang="less" scoped="scoped">
	.cart-list-wrap {
		position: relative;
		top: 44px;
		bottom: 89px;
		background-color: #fff;
	}
</style>
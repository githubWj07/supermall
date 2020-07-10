<template>
	<div class="cart-wrap">
		<!-- 导航 -->
		<nav-bar class="cart-nav">
			<template #nav-center>购物车({{num}})</template>
		</nav-bar>
		<!-- 购物车bar -->
		<cart-list></cart-list>
		<cart-bot-bar></cart-bot-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	import CartList from './childCopm/CartList.vue'
	import CartBotBar from './childCopm/CartBotBar.vue'
	export default {
		name: 'Cart',
		components: {
			NavBar,
			CartList,
			CartBotBar
		},
		computed: {
			num() {
				return this.$store.state.cartList.length;
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.cart-nav {
		color: #fff;
		background-color: var(--color-high-text);
		position: fixed;
		top:0;
		left:0;
		right: 0;
		// z-index: 1;
	}
</style>

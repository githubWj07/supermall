<template>
	<div class="cart-wrap">
		<nav-bar class="cart-nav">
			<template #nav-center>购物车</template>
		</nav-bar>
	</div>
	
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name: 'Cart',
		components: {
			NavBar
		}
	}
</script>

<style lang="less" scoped="scoped">
	.cart-nav {
		color: #fff;
		background-color: var(--color-high-text);
	}
</style>

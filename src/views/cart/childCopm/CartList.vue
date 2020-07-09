<template>
	<div class="cart-list-wrap">
		<!-- <div class="cart-list-main flex" v-for="item in cartList">
			<div class="cart-list-left">
				<input type="checkbox" class="check">
				<img :src="item.image" alt="" class="goods-img">
			</div>
			<div class="cart-list-right">
				<div class="goods-name one-txt-cut">{{item.title}}</div>
				<div class="goods-info flex">
					<span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
				</div>
			</div>
		</div> -->
		<cart-list-item :cartList="cartList"></cart-list-item>
		<!-- <div>list: {{cartList}}</div> -->
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
		bottom: 49px;
		background-color: #fff;
	}
</style>
<template>
	<div class="cart-list-wrap">
		<div class="cart-list-main flex">
			<input type="checkbox" class="check">
			<img src="" alt="">
			<div>
				<div class="goods-name"></div>
				<div class="goods-info flex">
					<span>价格</span><span>数量</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CartList"
	}
</script>

<style lange="less" scoped="scoped">
	.check {
		width: ;
		background-color: #fff;
		border: 1px solid var(--color-high-text: #ff5777);
		border-radius: 100%;
	}
	.goods-info {
		justify-content: space-between;
	}
</style>

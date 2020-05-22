<template>
	<div class="tab-bar-wrap">
		<div class="tab-bar-item">
			<div><img src="../../assets/images/tabbar/icon01.png" alt=""></div>
			<div>首页</div>
		</div>
		<div class="tab-bar-item">
			<div><img src="../../assets/images/tabbar/icon02.png" alt=""></div>
			<div>分类</div>
		</div>
		<div class="tab-bar-item">
			<div><img src="../../assets/images/tabbar/icon03.png" alt=""></div>
			<div>购物车</div>
		</div>
		<div class="tab-bar-item">
			<div><img src="../../assets/images/tabbar/icon04.png" alt=""></div>
			<div>我的</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="less">
	.tab-bar-wrap {
		font-size: 12px;
		height: 49px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 2px 2px 10px  #ececec;
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
	}
</style>

<template>
  <div id="app">
    <tab-bar>
		<tab-bar-item>
			<template #item-icon>
				<img src="./assets/images/tabbar/icon01.png" alt="">
			</template>
			<template #item-text>
				<div>主页</div>
			</template>
		</tab-bar-item>
		<tab-bar-item>
			<template #item-icon>
				<img src="./assets/images/tabbar/icon02.png" alt="">
			</template>
			<template #item-text>
				<div>分类</div>
			</template>
		</tab-bar-item>
		<tab-bar-item>
			<template #item-icon>
				<img src="./assets/images/tabbar/icon03.png" alt="">
			</template>
			<template #item-text>
				<div>购物车</div>
			</template>
		</tab-bar-item>
		<tab-bar-item>
			<template #item-icon>
				<img src="./assets/images/tabbar/icon04.png" alt="">
			</template>
			<template #item-text>
				<div>我的</div>
			</template>
		</tab-bar-item>
	</tab-bar>
  </div>
</template>

<script>
	import TabBar from "./components/tabbar/TabBar.vue"
	import TabBarItem from "./components/tabbar/TabBarItem.vue"
	export default {
		name: 'App',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style lang="less">
	@import "./assets/css/reset.css";
</style>

<template>
  <div id="app">
    <tab-bar>
		<tab-bar-item></tab-bar-item>
		<tab-bar-item></tab-bar-item>
		<tab-bar-item></tab-bar-item>
		<tab-bar-item></tab-bar-item>
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

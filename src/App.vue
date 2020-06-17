<template>
  <div id="app">
	<keep-alive exclude="Detail">
	  <router-view></router-view>
	</keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
	import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"
	export default {
		name: 'App',
		components: {
			MainTabBar
		}
	}
</script>

<style lang="less">
	@import "assets/css/reset.css";
</style>

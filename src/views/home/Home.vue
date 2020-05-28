<template>
	<nav-bar class="home-nav">
		<template #nav-center>
			<div>购物街</div>
		</template>
	</nav-bar>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar.vue"
	export default {
		name: 'Home',
		components: {
			NavBar
		}
	}
</script>

<style>
	.home-nav {
		color: #fff;
		background-color: deeppink;
	}
</style>

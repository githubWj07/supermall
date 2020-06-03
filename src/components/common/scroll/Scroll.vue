<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	export default {
		name: 'Scroll',
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll (this.$refs.wrapper,{
				click: true
			})
		}
	}
</script>

<style>
</style>

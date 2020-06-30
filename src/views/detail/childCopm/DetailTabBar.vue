<template>
	<nav-bar class="nav-bar">
		<template #nav-left>
			<div @click="backFn">
				<img src="~assets/images/fanhui.png" alt="" class="back-icon">
			</div>
		</template>
		<template #nav-center>
			<div class="nav-center-content">
				<div v-for="(item,index) in titles" 
					 class="nav-center-item"
					 :class="{active: currentIndex === index}"
					 @click="itemClick(index)"
				>{{item}}</div>
			</div>
		</template>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name: 'DetailTabBar',
		components:{
			NavBar
		},
		data() {
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex: 0
			}
		},
		methods: {
			backFn() {
				this.$router.back()
			},
			itemClick(index){
				this.currentIndex = index;
				this.$emit('titleClick', index)
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav-bar {
		border-bottom: 1px solid #ececec;
		.back-icon {
			width: 28px;
			height: 28px;
			vertical-align: middle;
		}
		.nav-center-content {
			display: flex;
			font-size: 13px;
			.nav-center-item {
				flex: 1;
			}
		}
	}
	.active{
		color: var(--color-high-text)
	}
	
</style>

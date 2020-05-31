<template>
	<div class="recommend-wrap">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<p><img :src="item.image" alt="" class="recommend-img"></p>
				<p>{{item.title}}</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.recommend-wrap {
		display: flex;
		background-color: #fff;
		font-size: 12px;
		padding: 10px 0 20px;
		border-bottom: 10px solid #ededed;
		.recommend-item {
			flex: 1;
			text-align: center;
			.recommend-img {
				width: 70px;
				height: 70px;
				margin-bottom: 10px;
			}
		}
	}
</style>

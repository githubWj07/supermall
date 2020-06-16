<template>
	<div v-if="Object.keys(detailInfo).length !== 0">
		<p class="desc">{{detailInfo.desc}}</p>
		<p class="desc">{{detailInfo.detailImage[0].key}}</p>
		<p v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
			<img :src="item" alt="" class="img" @load="imgLoad">
		</p>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			imgLoad(){
				this.$emit('imgLoad')
			}
		}
	}
</script>

<style lang="less" scoped>
	.desc {
		font-size: 14px;
		padding: 0 4px;
		line-height: 20px;
		margin: 4px 0;
		text-indent: 10px;
	}
	.img {
		width: 100%;
	}
</style>

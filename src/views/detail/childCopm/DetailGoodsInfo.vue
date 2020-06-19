<template>
	<div v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-text-wrap">
			<div class="text-top-style"></div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div class="text-bot-style"></div>
		</div>
		<div class="img-list-wrap" v-for="item in detailInfo.detailImage">
			<div class="desc">{{item.key}}</div>
			<div v-for="(item, index) in item.list" :key="index">
				<img :src="item" alt="" class="img" @load="imgLoad">
			</div>
		</div>
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

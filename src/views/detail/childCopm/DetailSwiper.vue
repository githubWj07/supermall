<template>
	<swiper class="banner">
		<swiper-item v-for="item in banners">
			<a :href="item">
				<img :src="item">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index';
	export default {
		name: 'DetailSwiper',
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.banner {height: 300px;overflow: hidden;}
</style>

import BackTop from "components/content/backTop/BackTop.vue";
export const scrollTopMixin = {
  data() {
	  return {
		  isShowBackTop: false,
	  }
  },
  components: {
	  BackTop
  },
  methods: {
	  backTop(){
	  	//返回顶部
	  	this.$refs.scroll.scrollTo(0,0);
	  }
  }
}
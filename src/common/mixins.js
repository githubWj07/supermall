import BackTop from "components/content/backTop/BackTop.vue";
//图片列表刷新
export const imgRefrashMixin = {
  mounted() {
  	//请求数据列表后刷新
  	this.itemImgLister = ()=> {
  		this.$refs.scroll.refresh();
  	}
  	this.$bus.$on('itemImgLoad',this.itemImgLister);
  }
}

//返回顶部
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
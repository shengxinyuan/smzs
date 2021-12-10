<template>
	<view>
		<zs-hx-navbar :config="config" @searchClick="searchClick"></zs-hx-navbar>
		<zs-shoplist-type :shop_list="shop_list" :lists="list" :cate_fist_id="cate_id" 
		@shop_confim="shop_confim" :isFoll="isFoll" :paddingTop="paddingTop"
			:lv="lv" :screen_label_list="label_list">
		</zs-shoplist-type>
		<view class=""
		style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
		v-if="shop_list.length > 0">
			{{ loadingText }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {
					backgroundColor: [1, '#293C79'],
					color: '#ffffff',
					search: {
						value: '',
						placeholder: '',
						disabled: true,
						bgColor: '#ffffff'
					},
				},
				cate_id: -1,
				list: '', //筛选条件
				shop_list: [],
				pid: 0,
				params: [],
				filtrate: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
				label_list: {},
				isTop:0,
				myScroll:0,
				isFoll:'detail',
				paddingTop:'100rpx'
			}
		},
		mounted() {
			console.log('mounted 组件挂载完毕状态===============》');
			const query = uni.createSelectorQuery().in(this);
			query.select('#scrollView').boundingClientRect(data => {
			console.log("得到布局位置信息" + JSON.stringify(data));
			console.log("节点离页面顶部的距离为" + data.top);
			this.myScroll = data.top
			}).exec();
		},
		onPageScroll(e) {
			// 重点，用到滑动切换必须加上
			// this.$refs.hxnb.pageScroll(e);
			// console.log(e)
			if(e.scrollTop > this.myScroll){
			this.isTop = 1
			}else{
			this.isTop = 0
			}
			
		},
		onLoad(op) {
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			this.cate_id = op.classify_id
			this.pid = op.pid
			console.log(op)
			this.get_label_list()
			this.page_render()
		},
		onReachBottom() {
			if (this.current_page === this.last_page) {
				this.loadingText = '没有更多了'
				return
			}
			if (this.loadingText === '正在加载中...') {
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.params.page = this.current_page
			let params = {
				cate_fist_id: this.cate_id,
				shop_label_cate_id: this.pid,
				page: this.current_page
			}
			if (this.filtrate == 1) {
				this.get_data(this.params)
			} else {
				this.get_data(params)
			}
		},
		methods: {
			get_label_list(){
				this.$api.get('screen_label').then(res=>{
					if(res.status == 1){
						this.label_list = res.data
					}
				})
			},
			//页面渲染
			page_render() {
				//筛选条件
				this.$api.get('screen', {
					cate_id: this.cate_id,
					shop_label_cate_id: 1
				}).then(res => {
					if (res.status == 1) {
						this.list = res.data
					}
				})
				let params = {
					cate_fist_id: this.cate_id,
					shop_label_cate_id: this.pid,
					page: this.current_page
				}
				this.get_data(params)
			},
			
			get_data(params){
				uni.showLoading()
				this.$api.post('goods', params).then(res => {
					if (res.status == 1) {
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.page_login = true
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list = this.shop_list.concat(res.data.data) 
							console.log(this.shop_list)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
							uni.hideLoading()
						} else {
							uni.hideLoading()
						}
					}
				})
			},
			// 确定筛选
			shop_confim(e) {
				this.current_page = 1
				this.shop_list = []
				this.filtrate = 1
				let obj = {}
				obj = e
				obj.page = this.current_page
				obj.shop_label_cate_id = this.pid
				this.params = e
				this.get_data(this.params)
			},
			searchClick() {
				this.com.navto('../index/search')
			}
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.header {
		width: 100%;
		padding: 0 20upx;
		display: flex;
		align-items: center;
		background-color: #293C79;

		.icon {
			margin-right: 20upx;
		}

		.input-view {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex: 1;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			margin: 7px 0;
			line-height: 60rpx;
			background-color: #eee;

			input {
				margin-top: 10rpx;
				font-size: 30rpx;
			}
		}
	}

	.contes {
		width: 100%;
		background-color: #F6F6F6;
	}
</style>

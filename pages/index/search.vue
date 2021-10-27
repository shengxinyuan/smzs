<template>
	<view class="box">
		<!-- 搜索框 -->
		<zs-hx-navbar :config="config" @searchConfirm="go_search"></zs-hx-navbar>
		<!-- 历史搜索 -->
		<view v-if="shop_tuij == ''">
			<view v-if="history.length != 0" style="width: 100%;">
				<view class="zl-history-box">
					<view class="zl-history">
						<text>历史搜索</text>
					</view>
					<u-icon name="trash" @click="deles" size="40"></u-icon>
				</view>
				<!-- 内容 -->
				<view class="zl-search-history">
					<text v-for="(item,index) in history" :key="index" @click="again(item)">{{item}}</text>
				</view>
			</view>

			<!-- 热门搜索 -->
			<!-- <view>
					<view class="zl-search-hot">
						<view class="zl-hot-title">
							<text>热门搜索</text>
						</view>
					</view>
					<view class="zl-hot-text">
						<text v-for="(item,index) in search_hot" @click="again(item)" :key="index">{{item}}</text>
					</view>
				</view> -->
		</view>
		<zs-shoplist-type :shop_list="shop_tuij" :lists="list" :cate_fist_id="nav_ind" 
		:shop_subject_id="''"
			@shop_confim="shop_confim" :lv="lv"></zs-shoplist-type>
		<!-- <zs-shopping-list :shop_list="shop_tuij" :lv="lv"></zs-shopping-list> -->
		<view class=""
		style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
		v-if="shop_tuij.length > 0">
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
						placeholder: '名称搜索',
						disabled: false,
						bgColor: '#eee'
					},
				},
				search_s: "", //搜索关键字
				history: [], //搜索历史
				shop_tuij: [],
				nav_ind: 0,
				lv: 0,
				key: '',
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
			}
		},
		onReachBottom() {
			if(this.current_page === this.last_page){
				this.loadingText = '没有更多了'
				return
			}
			if(this.loadingText === '正在加载中...'){
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.get_data(this.key)
		},
		onLoad(e) {
			this.get_screen()
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			console.log(e)
			let a = e.tit
			if (a) {
				if (e.type == 1) {
					this.config.search.value = a
				}
			}
			if (uni.getStorageSync('neirong')) {
				let aq = uni.getStorageSync('neirong')
				this.history = JSON.parse(aq)
			}
			console.log(this.shop_tuij)
			// //推荐商品
			// this.$api.get('hotgoods').then(res=>{
			// 	console.log(res)
			// 	if(res.status == 1){
			// 		this.shop_tuij = res.data
			// 	}
			// })
		},
		methods: {
			get_screen(){
				//筛选条件
				this.$api.get('screen', {
					cate_id: 0,
				}).then(res => {
					if (res.status == 1) {
						this.list = res.data
					}
				})
			},
			g_search(key) {
				this.get_data(key)
			},
			go_search(data) {
				// console.log(data)
				console.log(data.value)
				this.shop_tuij = []
				let key = data.value
				this.key = data.value
				if (key == "") {
					this.com.msg('搜索内容不能为空')
				} else {
					this.get_data(key)
					if (this.history.indexOf(key) == -1) {
						this.history.unshift(key) //unshift:跟push性质一样 区别就是将新添加的数据放在第一位
					}
					if (this.history.length > 8) {
						this.history.pop()
					}
					uni.setStorage({
						key: 'neirong',
						data: JSON.stringify(this.history) //转换为字符串形式
					})
				}
			},
			//   传值
			shop_confim(e) {
				this.current_page = 1
				this.shop_tuij = []
				this.filtrate = 1
				let obj = {}
				obj = e
				obj.page = this.current_page
				this.params = obj
				this.get_data(this.key)
				console.log(this.key)
			},
			
			// 删除搜索历史
			deles() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定要删除历史搜索吗',
					success: function(res) {
						if (res.confirm) {

							that.history = []
							uni.removeStorage({
								key: 'neirong',
								success: function(res) {
									uni.showToast({
										title: '清空成功'
									})
								}
							});
						}
					}
				});
			},
			// 点击搜索历史再次搜索
			again(item) {
				console.log(item)
				this.config.search.value = item
				this.key = item
				this.g_search(item)
			},
			get_data(key){
				uni.showLoading()
				this.$api.post('goods', {
					key: key,
					page: this.current_page
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_tuij = this.shop_tuij.concat(res.data.data) 
							// console.log(this.shop_tuij)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
						uni.hideLoading()
					} else {
						uni.hideLoading()
					}
				})
			},
		}
	}
</script>
<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.imgs {
		width: 100%;
		height: 100rpx;
		margin-top: 40rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box {
		width: 100%;
	}

	.zl-history-box {
		width: 100%;
		display: flex;
		padding: 20upx 30upx;
		justify-content: space-between;
	}

	.zl-history {
		height: 60upx;
		font-size: 30upx;
		font-weight: bold;
		line-height: 60upx;
	}

	.zl-search-history {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 30rpx;

		text {
			background-color: #fff;
			padding: 0 20upx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			text-align: center;
			border-radius: 40upx;
			max-width: 200rpx;
			height: 50rpx;
			line-height: 50rpx;
			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}


	.zl-search-hot {
		display: flex;
		padding: 20upx 30upx;
	}

	.zl-hot-title {
		width: 80%;
		height: 60upx;
		font-size: 32upx;
		font-weight: bold;
		line-height: 60upx;
	}

	.zl-hot-text text {
		background-color: #f3f3f3;
		margin: 20upx 20upx;
		padding: 12upx 50upx;
		line-height: 40upx;
		border-radius: 40upx;
		display: inline-block;
	}
</style>

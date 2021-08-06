<template>
	<view>
		<zs-hx-navbar :config="config" @searchClick="searchClick"></zs-hx-navbar>
		<zs-shoplist-type :shop_list="shop_list" :lists="list" :cate_fist_id="cate_id" @shop_confim="shop_confim" :lv="lv">
		</zs-shoplist-type>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {
					backgroundColor: [1,'#293C79'],
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
			}
		},
		onLoad(op) {
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			this.cate_id = op.classify_id
			this.pid = op.pid
			console.log(op)
			this.page_render()
		},
		methods: {
			//页面渲染
			page_render() {
				//筛选条件
				this.$api.get('screen', {
					cate_id: this.cate_id
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.list = res.data
					}
				})
				this.$api.post('goods', {
					cate_fist_id: this.cate_id,
					shop_label_cate_id : this.pid
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})
			},
			// 确定筛选
			shop_confim(e) {
				this.$api.post('goods', e).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})
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

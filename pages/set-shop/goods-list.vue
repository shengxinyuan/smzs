<template>
	<view>
		<u-tabs ref="tabs" :is-scroll="false" :list="tabList" active-color="#ff5810" inactive-color="#606266" font-size="24" :current="currentTab" @change="changecurrentTab"></u-tabs>
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view v-else scroll-y="true" class="cont_list_two" @scrolltolower="loadMore">
			<view class="cont_item" v-for="(item, index) in shop_list" :key="item.id">
				<image class="images" :src="item.image" mode="aspectFill"></image>
				<view class="base-cont">
					<view class="title">
						{{item.title}}
					</view>
					<view class="it_selt_l">
						<text><text style="">售价：￥</text>{{item.price}}</text>
					</view>
					<view class="it_selt_l">
						<text><text style="">库存：</text>{{item.price}}</text>
					</view>
					<view class="it_selt_l">
						<text v-if="item.status === 40" class="txt-red">拒绝原因：{{item.remark}}</text>
						<text v-else><text style="">目录：</text>一级目录 二级目录</text>
					</view>
				</view>
				<view class="index-cont">
					<view class="index-btn" v-for="(v, i) in tabList[currentTab].btns" :key="i" @click="btnCilck(item, v.type, v.tips)">
						{{ v.name }}
					</view>
				</view>
			</view>
		</scroll-view>
		
		<u-modal v-model="modalShow" :title="modalTitle" :content="modalContent" :show-cancel-button="true" @confirm="btnCilck(modalInfo.item, modalInfo.type)"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop_list: [],
				queryParams: {
					page: 1,
					limit: 10,
					status: '30',
					last_page: false
				},
				tabList: [
					{ 
						name: '在售',
						status: '30',
						btns: [
							{
								name: '编辑',
								type: 'edit',
								tips: ''
							},
							{
								name: '下架',
								type: 'offShelf',
								tips: '当前操作会将该商品的状态从上架变为下架，是否继续'
							}
						]
					},
					{
						name: '草稿箱',
						status: '10',
						btns: [
							{
								name: '编辑',
								type: 'edit',
								tips: ''
							},
							{
								name: '删除',
								type: 'delete',
								tips: '请注意！当前操作会将该商品删除，是否继续'
							}
						]
					},
					{
						name: '已下架',
						status: '35',
						btns: [
							{
								name: '上架',
								type: 'onShelf',
								tips: '确认上架该商品？'
							},
							{
								name: '编辑',
								type: 'edit',
								tips: ''
							},
							{
								name: '删除',
								type: 'delete',
								tips: '请注意！当前操作会将该商品删除，是否继续'
							}
						]
					},
					{
						name: '审核中',
						status: '20',
						btns: [
							{
								name: '撤回',
								type: 'withdraw',
								tips: '请注意！当前操将该商品撤回并终止审核流程，是否继续'
							}
						]
					},
					{	
						name: '审核拒绝',
						status: '40',
						btns: [
							{
								name: '编辑',
								type: 'edit',
								tips: ''
							}
						]
					},
				],
				currentTab: 0,
				modalShow: false,
				modalContent: '',
				modalTitle: '',
				modalInfo: {
					type: '',
					item: ''
				},
			}
		},
		onLoad () {
			this.queryList();
			
		},
		methods: {
			// 拉商品数据
			queryList () {
				this.$api.get('custom/queryGoods', {
					page: this.queryParams.page,
					limit: this.queryParams.limit,
					status: this.queryParams.status,
				}).then(res => {
					if (res.status && res.data) {
						this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, res.data.data];
						this.queryParams.last_page = res.data.last_page;
					}
				})
			},
			loadMore () {
				if (this.queryParams.last_page) return;
				this.queryParams.page += 1;
				this.queryList();
			},
			reload () {
				this.queryParams.page = 1;
				this.queryList();
			},
			
			// 切换tab
			changecurrentTab (index) {
				this.currentTab = index;
				this.queryParams.status = this.tabList[index].status;
				this.queryParams.page = 1;
				this.queryList();
			},
			
			btnCilck (item, type, tips) {
				if (tips) {
					this.modalShow = true;
					this.modalTitle = `操作商品：${item.title}`;
					this.modalContent = tips;
					this.modalInfo.type = type;
					this.modalInfo.item = item;
					return
				}
				if (type === 'edit') {
					
					// 编辑
					uni.navigateTo({
						url: `goods-upload?id=${item.id}&status=${item.status}`
					})
					
				} else if (type === 'onShelf') {
					
					// 上架
					this.$api.post('custom/onSell', { id: item.id }).then(res => {
						if (res.status) {
							this.$refs.uToast.show({
								title: '上架成功',
								type: 'success',
							})
							this.reload();
						} else {
							this.$refs.uToast.show({
								title: `上架失败，原因：${res.message}`,
								type: 'error',
							})
						}
					})
				} else if (type === 'offShelf') {
					
					// 下架
					this.$api.post('custom/notSell', { id: item.id }).then(res => {
						if (res.status) {
							this.$refs.uToast.show({
								title: '下架成功',
								type: 'success',
							})
							this.reload();
						} else {
							this.$refs.uToast.show({
								title: `下架失败，原因：${res.message}`,
								type: 'error',
							})
						}
					})
					
				} else if (type === 'delete') {
					
					// 删除
					this.$api.post('custom/delete', { id: item.id }).then(res => {
						if (res.status) {
							this.$refs.uToast.show({
								title: '删除成功',
								type: 'success',
							})
							this.reload();
						} else {
							this.$refs.uToast.show({
								title: `删除失败，原因：${res.message}`,
								type: 'error',
							})
						}
					})
					
				} else if (type === 'withdraw') {
					
					// 撤回
					this.$api.post('custom/withdraw', { id: item.id }).then(res => {
						if (res.status) {
							this.$refs.uToast.show({
								title: '撤回成功',
								type: 'success',
							})
							this.reload();
						} else {
							this.$refs.uToast.show({
								title: `撤回失败，原因：${res.message}`,
								type: 'error',
							})
						}
					})
					
				}
			},

		}
	}
</script>

<style lang="scss" scoped>
	.cont_list_two {
		width: 100%;
		border-top: 1px solid #eee;
		.cont_item {
			margin: 0 32rpx;
			background-color: white;
			overflow: hidden;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			color: rgb(96, 98, 102);
			.images {
				width: 180rpx;
				border-radius: 10rpx;
				height: 180rpx;
				display: block;
				margin-right: 16rpx;
			}
			
			.base-cont {
				flex: 1;
				font-size: 24rpx;
				.title {
					font-size: 32rpx;
					margin-bottom: 8rpx;
					color: #414141;
				}
				.txt-red {
					color: red;
				}
			}
			.index-cont {
				width: 100rpx;
				font-size: 24rpx;
				.index-btn {
					text-align: center;
					margin-top: 10px;
					color: #2979ff;
				}
			}
		}
	}
	
</style>

<template>
	<view class="goods-index">
		<view v-show="!isOrder">
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="firstList" active-color="#ff5810" inactive-color="#606266" font-size="30" :current="first" @change="changeFirst"></u-tabs>
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="secondList" active-color="#ff5810" inactive-color="#606266" font-size="24" :current="second" @change="changeSecond"></u-tabs>
		</view>
		
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view v-else scroll-y="true" class="goods-list">
			<view class="cont_item" v-for="(item,i) in shop_list" :key="i">
				<image class="images" :src="item.image" mode="aspectFill"></image>
				<view class="base-cont">
					<view class="title">
						{{item.title}}
					</view>
					<view class="it_selt_l">
						<text><text style="">￥</text>{{item.price}}</text>
					</view>
					<view class="it_selt_r">
						已售{{item.sale}}件
					</view>
					<view class="it_selt_r">
						库存{{item.stock}}件
					</view>
				</view>
				<view class="index-cont">
					<view class="">
						排序权重：{{isCustom ? item.sort : item.set_sort}}
					</view>
					<view v-if="isOrder" class="index-btn" @click="editIndex(item)">
						修改
					</view>
				</view>
			</view>
			<u-loadmore :status="moreStatus" margin-bottom="120" margin-top="20"/>
		</scroll-view>
		
		
		<view class="status-btn-cont">
			<view class="">
				提示：
			</view>
			<view class="txt">
				<view>1.按权重从大到小排序，权重可以重复</view>
				<view>2.可以切换目录来修改其中商品的权重</view>
			</view>
			<view class="btn" v-if="!isOrder" @click="startOrder">调整排序权重</view>
			<view class="btn" v-else @click="saveOrder">保存排序</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop_list: [],
				firstList: [
					{name: '目录1', children: [{name: '目录1-1'}, {name: '目录1-2'}, {name: '目录1-3'}]},
					{name: '目录2', children: [{name: '目录2-1'}, {name: '目录2-2'}, {name: '目录2-3'}]},
					{name: '目录3', children: [{name: '目录3-1'}, {name: '目录3-2'}, {name: '目录3-3'}]},
					{name: '目录4', children: [{name: '目录4-1'}, {name: '目录4-2'}, {name: '目录4-3'}]},
					{name: '目录5', children: [{name: '目录5-1'}, {name: '目录5-2'}, {name: '目录5-3'}]},
					{name: '目录6', children: [{name: '目录6-1'}, {name: '目录6-2'}, {name: '目录6-3'}]},
					{name: '目录7', children: [{name: '目录7-1'}, {name: '目录7-2'}, {name: '目录7-3'}]},
					{name: '目录8', children: [{name: '目录8-1'}, {name: '目录8-2'}, {name: '目录8-3'}]},
				],
				secondList: [],
				list: [],
				first: 0,
				second: 0,
				isOrder: false,
				sort_list: [],
				current: {},
				member_id: '',
				isCustom: 0,
				queryParams: {
					page: 1,
					limit: 20,
					last_page: 1
				},
				moreStatus: 'loadmore',
			}
		},
		onLoad () {
			this.member_id = uni.getStorageSync('member_info').id;
			this.getAllCategory();
		},
		onReachBottom() {
			if (this.queryParams.last_page === this.queryParams.page) {
				
				return;
			} else {
				
				this.queryParams.page += 1;
				this.queryList();
			}
		},
		methods: {
			getAllCategory() {
				uni.showLoading({
					mask: true
				})
				this.$api.get('category/getAllCategory').then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.firstList = res.data;
						this.secondList = this.firstList[this.first].children;
						this.isCustom = this.firstList[this.first] && this.firstList[this.first].member_id > 0 ? 1 : 0;
						this.queryList();
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			queryList () {
				if (this.isCustom === 1) {
					this.$api.get('shop/getAllGood', {
						cate_id: this.firstList[this.first].id,
						cate_second_id: this.secondList && this.secondList[this.second] && this.secondList[this.second].id,
						member_id: this.member_id,
						sale: 1,
						price: 1,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...res.data.data];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				} else {
					this.$api.get('shop/getSurmerGood', {
						cate_first_id: this.firstList[this.first].id,
						cate_id: this.secondList && this.secondList[this.second] && this.secondList[this.second].id,
						member_id: this.member_id,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...res.data.data];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				}
			},
			// 编辑当前item
			editIndex (item) {
				this.current = item;
				uni.showModal({
					title: '输入新的权重',
					editable: true,
					showCancel: true,
					success: (res) => {
						if (res.confirm) {
							const num = Number(res.content)
							if (num > 0 && num < 1000) {
								this.confirmItemOrder(num);
							} else {
								uni.showToast({
									icon: 'error',
									title: '请输入1-999的数字'
								})
							}
						}
					},
				})
			},
			// 一级目录切换
			changeFirst (index) {
				this.first = index;
				this.isCustom = this.firstList[index] && this.firstList[index].member_id > 0 ? 1 : 0;
				this.second = 0;
				this.secondList = this.firstList[index].children;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			// 二级目录切换
			changeSecond (index) {
				this.second = index;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			// 确认修改
			confirmItemOrder (i) {
				const index = Number(i);
				const item = this.sort_list.find((item) => item.id === this.current.id)
				if (item) {
					item.sort = index;
				} else {
					this.sort_list.push({
						id: this.current.id,
						sort: index
					});
				}
				this.shop_list.forEach((item) => {
					if (item.id === this.current.id) {
						item.sort = index;
						item.set_sort = index;
					}
				})
			},
			// 开始排序
			startOrder () {
				this.isOrder = true;
			},
			// 保存排序
			saveOrder () {
				this.$api.post('custom/setWeight',{
					type: this.isCustom,
					sort_list: this.sort_list
				}, { json: true }).then(res=>{
					if (res.status == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
						this.sort_list = [];
						this.isOrder = false;
						this.queryList();
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list {
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
				margin: 20rpx 0;
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
			}
			.index-cont {
				width: 200rpx;
				font-size: 24rpx;
				text-align: right;
				.index-btn {
					margin-top: 10px;
					color: #2979ff;
				}
			}
		}
	}
	.status-btn-cont {
		position: fixed;
		left: 0;
		bottom: 0;
		height: 100rpx;
		width: 100%;
		background-color: #fff;
		padding: 12rpx 32rpx;
		display: flex;
		align-items: center;
		border-top: 1px solid #eee;
		.txt {
			flex: 1;
			font-size: 20rpx;
		}
		.btn {
			color: #fff;
			padding: 4px 8px;
			border-radius: 10rpx;
			border: 1px solid #ff5810;
			background-color: #ff5810;
		}
	}

</style>

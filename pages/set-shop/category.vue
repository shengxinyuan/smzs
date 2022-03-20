<template>
	<view>
		<view class="sep-line">
			<view class="des-text">
				<image src="https://zuanshi.semoh.cn/applet_static/my/guany_me.png" mode="widthFix"></image>
				权重越大排序越靠前
			</view>
			<u-button class="custom-btn" type="primary" size="mini" @click="addFirst">增加类目</u-button>
		</view>
		<view class="item" v-for="item in list">
			<view class="first">
				<view>{{item.title}}<text v-if="item.member_id === 0" class="tip">(商城默认)</text></view>
				<view class="handle">
					排序权重：{{item.sort}}
					<u-button class="custom-btn" size="mini" @click="editFirst(item)">编辑</u-button>
				</view>
			</view>
			
			<view v-if="item.children && item.children.length && item.member_id > 0" class="second">
				<view class="item" v-for="sub in item.children">
					<view class="first">
						<view>{{sub.title}}</view>
						<view class="handle">
							二级排序权重：{{sub.sort}}
							<u-button class="custom-btn" size="mini" @click="editSecond(sub)">编辑</u-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
			}
		},
		onLoad() {
			this.getAllCategory();
		},
		methods: {
			getAllCategory() {
				uni.showLoading({
					mask: true
				})
				this.$api.get('category/getAllCategory').then((res) => {
					console.log(res);
					uni.hideLoading()
					if (res.status == 1) {
						this.list = res.data;
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			getNewIndex() {
				return new Promise((resolve, reject) => {
					uni.showModal({
						title: '输入新的权重',
						editable: true,
						showCancel: true,
						success: (res) => {
							if (res.confirm) {
								const num = Number(res.content)
								if (num > 0 && num < 1000) {
									resolve(num);
								} else {
									uni.showToast({
										icon: 'error',
										title: '请输入1-999的数字'
									})
									reject()
								}
							} else {
								reject()
							}
						},
					})
				})
			},
			getNewText() {
				return new Promise((resolve, reject) => {
					uni.showModal({
						title: '输入名称',
						editable: true,
						showCancel: true,
						success: (res) => {
							if (res.confirm) {
								const text = res.content.trim()
								if (text) {
									resolve(text);
								} else {
									uni.showToast({
										icon: 'error',
										title: '请输入内容'
									})
									reject()
								}
							} else {
								reject()
							}
						},
					})
				})
			},
			edit(data) {
				uni.showLoading({
					mask: true
				})
				this.$api.post('category/edit', data).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.getAllCategory();
					} else {
						uni.showToast({
							icon: 'none',
							title: res.message || '保存失败，请重试'
						})
					}
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '保存失败，请重试'
					})
				})
			},
			editIndex({ id, parent_id, title }) {
				this.getNewIndex().then((sort) => {
					this.edit({ id, parent_id, title, sort })
				})
			},
			editTitle({ id, parent_id, sort }) {
				this.getNewText().then((title) => {
					this.edit({ id, parent_id, title, sort })
				})
			},
			add(data) {
				uni.showLoading({
					mask: true
				})
				this.$api.post('category/addFirstCategory', data).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.getAllCategory();
					} else {
						uni.showToast({
							icon: 'none',
							title: res.message || '保存失败，请重试'
						})
					}
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '保存失败，请重试'
					})
				})
			},
			addFirst() {
				this.getNewText().then((title) => {
					this.add({ parent_id: 0, title })
				})
			},
			addSecond({ id }) {
				this.getNewText().then((title) => {
					this.add({ parent_id: id, title })
				})
			},
			deleteItem({ id }) {
				uni.showModal({
					title: '确认删除吗？',
					content: '删除后不可恢复',
					showCancel: true,
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								mask: true
							})
							this.$api.post('category/delete', { id }).then((res) => {
								uni.hideLoading()
								if (res.status == 1) {
									this.getAllCategory();
								} else {
									uni.showToast({
										icon: 'none',
										title: res.message || '删除失败，请重试'
									})
								}
							}).catch(() => {
								uni.hideLoading()
								uni.showToast({
									icon: 'none',
									title: '删除失败，请重试'
								})
							})
						}
					},
				})
			},
			
			editFirst(item) {
				const list = item.member_id > 0 ? ['修改权重', '修改名称', '新建二级类目', '删除'] : ['修改权重']
				uni.showActionSheet({
				    itemList: list,
				    success: (res) => {
				        switch (res.tapIndex) {
							case 0:
								this.editIndex(item);
								break;
							case 1:
								this.editTitle(item);
								break;
							case 2:
								this.addSecond(item);
								break;
							case 3:
								this.deleteItem(item);
								break;
						}
				    },
				});
			},
			editSecond(sub) {
				uni.showActionSheet({
				    itemList: ['修改权重', '修改名称', '删除'],
				    success: (res) => {
				        switch (res.tapIndex) {
							case 0:
								this.editIndex(sub);
								break;
							case 1:
								this.editTitle(sub);
								break;
							case 2:
								this.deleteItem(sub);
								break;
						}
				    },
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sep-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12rpx 24rpx;
	}
	.des-text {
		font-size: 24rpx;
		color: #8F939C;
		display: flex;
		align-items: center;
		
		image {
			height: 24rpx;
			width: 24rpx;
			margin-right: 6rpx;
		}
	}
	.item {
		padding: 30rpx;
		border-top: 1rpx solid #eee;
	}

	.first {
		display: flex;
		justify-content: space-between;
		align-items: center;
		word-break: break-all;
		.tip {
			font-size: 24rpx;
			color: #666;
			margin-left: 10rpx;
		}
	}

	.handle {
		color: #606266;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
		flex-shrink: 0;
		width: 320rpx;
		margin-left: 20rpx;
	}
	.line {
		display: flex;
		margin-bottom: 8rpx;
	}
	.line:last-child {
		margin-bottom: 0;
	}
	
	.second {
		padding: 30rpx;
		padding-bottom: 0;
		padding-right: 0;
		flex: 0;
		margin-left: 40rpx;
		
		.item {
			padding-right: 0;
		}
	}
	.second .item:last-child {
		padding-bottom: 0;
	}
	
	.custom-btn {
		margin: 0;
	}
</style>

<template>
	<view>
		<view class="item" v-for="item in list">
			<view class="first">
				<view>{{item.text}}</view>
				<view class="handle">
					排序序号：{{item.index}}
					<u-button class="custom-btn" size="mini" @click="editFirst(item)">编辑</u-button>
				</view>
			</view>
			
			<view v-if="item.subCategory && item.subCategory.length" class="second">
				<view class="item" v-for="sub in item.subCategory">
					<view class="first">
						<view>{{sub.text}}</view>
						<view class="handle">
							二级排序序号：{{sub.index}}
							<u-button class="custom-btn" size="mini" @click="editSecond(item, sub)">编辑</u-button>
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
				this.$api.get('/category/getAllCategory').then((res) => {
					console.log(res);
					uni.hideLoading()
					if (res.status == 1) {
						this.list = res.data;
					}

					// TODO
					this.list = Array.from({
						length: 20
					}).map((_, i) => ({
						id: i,
						text: `index - ${i + 1}`,
						isCustom: Math.random()  > 0.5,
						index: i + 1,
						subCategory: i > 10 ? Array.from({
							length: 3
						}).map((_, j) => ({
							id: j,
							text: `subsubsubsubsubsubsubsubsubsub - ${j + 1}`,
							index: j + 1
						})) : []
					}));
				}).catch(() => {
					uni.hideLoading()
				})
			},
			getNewIndex() {
				return new Promise((resolve, reject) => {
					uni.showModal({
						title: '输入新的序号',
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
			editIndex(id, subId) {
				this.getNewIndex().then((index) => {
					this.$api.get('/category/edit', { id, subId, index }).then((res) => {
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
				})
			},
			addSecond(id) {
				this.getNewText().then((text) => {
					this.$api.get('/category/addFirstCategory', { id, text }).then((res) => {
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
				})
			},
			deleteItem(id, subId) {
				uni.showModal({
					title: '确认删除吗？',
					content: '删除后不可恢复',
					showCancel: true,
					success: (res) => {
						if (res.confirm) {
							this.$api.get('/category/delete', { id, subId }).then((res) => {
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
				const list = item.isCustom ? ['修改序号', '新建二级目录', '删除'] : ['修改序号']
				uni.showActionSheet({
				    itemList: list,
				    success: (res) => {
				        switch (res.tapIndex) {
							case 0:
								this.editIndex(item.id);
								break;
							case 1:
								this.addSecond(item.id);
								break;
							case 2:
								this.deleteItem(item.id);
								break;
						}
				    },
				});
			},
			editSecond(item, sub) {
				uni.showActionSheet({
				    itemList: ['修改序号', '删除'],
				    success: (res) => {
				        switch (res.tapIndex) {
							case 0:
								this.editIndex(item.id, sub.id);
								break;
							case 1:
								this.deleteItem(item.id, sub.id);
								break;
						}
				    },
				});
			},
		}
	}
</script>

<style scoped>
	.item {
		padding: 30rpx;
		border-top: 1rpx solid #eee;
	}

	.first {
		display: flex;
		justify-content: space-between;
		align-items: center;
		word-break: break-all;
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
		flex: 0;
		width: 100%;
		margin-left: 40rpx;
	}
	.second .item:last-child {
		padding-bottom: 0;
	}
	
	.custom-btn {
		margin: 0;
	}
</style>

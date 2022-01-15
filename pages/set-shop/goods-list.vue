<template>
	<view>
		<u-tabs ref="tabs" :is-scroll="true" :list="firstList" active-color="#2979ff" inactive-color="#606266" font-size="30" :current="first" @change="changeFirst"></u-tabs>
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view scroll-y="true" class="cont_list_two">
			<view class="cont_item" v-for="(item,i) in shop_list" :key="i">
				<image class="images" :src="item.image" mode="aspectFill"></image>
				<view class="base-cont">
					<view class="title">
						{{item.title}}
					</view>
					<view class="it_selt_l">
						<text><text style="">￥</text>{{item.price}}</text>
					</view>
				</view>
				<view class="index-cont">
					<view v-if="first === 0">
						<view class="index-btn" @click="editIndex(item)">
							编辑
						</view>
						<view class="index-btn" @click="editIndex(item)">
							下架
						</view>
					</view>
					
					<view v-if="first === 1">
						<view class="index-btn" @click="editIndex(item)">
							编辑
						</view>
						<view class="index-btn" @click="editIndex(item)">
							删除
						</view>
					</view>
					
					<view v-if="first === 2">
						<view class="index-btn" @click="editIndex(item)">
							上架
						</view>
						<view class="index-btn" @click="editIndex(item)">
							编辑
						</view>
						<view class="index-btn" @click="editIndex(item)">
							删除
						</view>
					</view>
					
					<view v-if="first === 3">
						<view class="index-btn" @click="editIndex(item)">
							撤回
						</view>
					</view>
					
					<view v-if="first === 4">
						<view class="index-btn" @click="editIndex(item)">
							编辑
						</view>
					</view>
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop_list: [],
				firstList: [
					{name: '在售'},
					{name: '草稿箱'},
					{name: '已下架'},
					{name: '审核中'},
					{name: '审核拒绝'},
				],
				secondList: [],
				first: 0,
				second: 0,
				editShow: false
			}
		},
		onLoad () {
			this.shop_list = [
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					title: '商品1',
					sale: 10,
					price: 1000,
					index: 1,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
			];
		},
		methods: {
			// 上传店铺照片
			editIndex(item) {
				this.editShow = true;
			},
			// 上传照片删除
			remove(i) {
				this.image_plan = ''
			},
			save(){
				if (this.image_plan == '') {
					uni.showToast({
						title: '照片不能为空!',
						icon: 'none'
					});
					return
				}
				this.$api.post('manage',{image:this.image_plan}).then(res=>{
					if (res.status == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
						setTimeout(function() {
							uni.navigateBack()
						}, 1500);
					}
				})
			},
			changeFirst (index) {
				this.first = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cont_list_two {
		width: 100%;
		border-top: 1px solid #eee;
		.cont_item {
			width: 100%;
			border-radius: 16rpx;
			background-color: white;
			overflow: hidden;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			.images {
				width: 180rpx;
				border-radius: 10rpx;
				height: 180rpx;
				display: block;
			}
			
			.base-cont {
				flex: 1;
				font-size: 24rpx;
				.title {
					font-size: 36rpx;
					margin-bottom: 8rpx;
				}
			}
			.index-cont {
				width: 100rpx;
				font-size: 24rpx;
				.index-btn {
					margin-top: 10px;
					color: #2979ff;
				}
			}
	
			.it_text {
				width: 100%;
				.it_tit {
					font-size: 28rpx;
					width: 96%;
					overflow: hidden;
				}
	
				.it_text_cen {
					
	
					.it_price {
						font-size: 30rpx;
					}
	
					.it_selt_l {
						display: flex;
	
						text {
							color: #ea5b72;
							font-size: 30rpx;
						}
	
						image {
							width: 60rpx;
							height: 24rpx;
							margin-top: 10rpx;
						}
					}
				}
	
				.it_label {
					width: 100%;
					display: flex;
					margin-top: 10rpx;
					margin-bottom: 20rpx;
	
					view {
						font-size: 22rpx;
						padding: 0 8rpx;
						border: 2rpx solid #DD524D;
						color: #DD524D;
						border-radius: 6rpx;
					}
				}
	
				.it_selt_r {
					color: #998;
					margin-top: 6rpx;
					font-size: 24rpx;
				}
			}
	
		}
	}
	
</style>

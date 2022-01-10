<template>
	<view>
		<u-tabs ref="tabs" :is-scroll="true" :list="firstList" active-color="#2979ff" inactive-color="#606266" font-size="30" :current="first" @change="changeFirst"></u-tabs>
		<u-tabs ref="tabs" :is-scroll="true" :list="secondList" active-color="#2979ff" inactive-color="#606266" font-size="24" :current="second" @change="changeSecond"></u-tabs>
		
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<view class="cont_list_two" :style="{'padding-top': '20px'}">
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
				</view>
				<view class="index-cont">
					<view class="">
						推荐等级{{item.index}}
					</view>
					<view class="">
						修改序号
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
				first: 0,
				second: 0,
			}
		},
		onLoad () {
			this.secondList = this.firstList[this.first].children;
			this.shop_list = [{
				title: '商品1',
				sale: 10,
				price: 1000,
				index: 1,
				image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
			}];
		},
		methods: {
			// 上传店铺照片
			result_plan(e) {
				console.log(e)
				if (e.status == 1) {
					this.image_plan = e.data
				} else {
					console.log(e.message)
				}
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
				this.second = 0;
				this.secondList = this.firstList[index].children;
			},
			changeSecond (index) {
				this.second = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cont_list_two {
		width: 100%;
		padding: 0 3%;
		border-top: 1px solid #eee;
		.cont_item {
			width: 100%;
			margin-right: 2%;
			border-radius: 16rpx;
			background-color: white;
			margin-top: 10rpx;
			overflow: hidden;
			display: flex;
			align-items: center;
			padding: 20rpx 0 14rpx 14rpx;
			border-bottom: 1px solid #eee;
			.images {
				width: 180rpx;
				border-radius: 10rpx;
				height: 180rpx;
				display: block;
			}
			
			.base-cont {
				flex: 1;
				.title {
					font-size: 36rpx;
				}
			}
			.index-cont {
				width: 200rpx;
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

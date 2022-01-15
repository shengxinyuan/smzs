<template>
	<view class="goods-index">
		<u-tabs ref="tabs" :is-scroll="true" :list="firstList" active-color="#2979ff" inactive-color="#606266" font-size="30" :current="first" @change="changeFirst"></u-tabs>
		<u-tabs ref="tabs" :is-scroll="true" :list="secondList" active-color="#2979ff" inactive-color="#606266" font-size="24" :current="second" @change="changeSecond"></u-tabs>
		
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
					<view class="it_selt_r">
						已售{{item.sale}}件
					</view>
				</view>
				<view class="index-cont">
					<view class="">
						排序序号：{{item.index}}
					</view>
					<view class="index-btn" @click="editIndex(item)">
						修改排序
					</view>
				</view>
			</view>
		</scroll-view>
		
		<u-picker v-model="editShow" mode="selector" :default-selector="[10]" :range="[1,2,3,4,5,6,7,8,9,10]"></u-picker>
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
				editShow: false
			}
		},
		onLoad () {
			this.secondList = this.firstList[this.first].children;
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
		border-top: 1px solid #eee;
		.cont_item {
			margin: 0 32rpx;
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
				margin-right: 16rpx;
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
				width: 200rpx;
				font-size: 24rpx;
				text-align: center;
				.index-btn {
					margin-top: 10px;
					color: #2979ff;
				}
			}
		}
	}

</style>

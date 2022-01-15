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
						<text><text style="">售价：￥</text>{{item.price}}</text>
					</view>
					<view class="it_selt_l">
						<text><text style="">库存：</text>{{item.price}}</text>
					</view>
					<view class="it_selt_l">
						<text><text style="">目录：</text>一级目录 二级目录</text>
					</view>
				</view>
				<view class="index-cont">
					<view v-if="first === 0">
						<view class="index-btn" @click="edit(item)">
							编辑
						</view>
						<view class="index-btn" @click="offShelf(item)">
							下架
						</view>
					</view>
					
					<view v-if="first === 1">
						<view class="index-btn" @click="onShelf(item)">
							发布
						</view>
						<view class="index-btn" @click="edit(item)">
							编辑
						</view>
						<view class="index-btn" @click="deleteGood(item)">
							删除
						</view>
					</view>
					
					<view v-if="first === 2">
						<view class="index-btn" @click="onShelf(item)">
							上架
						</view>
						<view class="index-btn" @click="edit(item)">
							编辑
						</view>
						<view class="index-btn" @click="deleteGood(item)">
							删除
						</view>
					</view>
					
					<view v-if="first === 3">
						<view class="index-btn" @click="withdraw(item)">
							撤回
						</view>
					</view>
					
					<view v-if="first === 4">
						<view class="index-btn" @click="edit(item)">
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
			// 编辑
			edit(item) {
				
			},
			// 上架
			onShelf(item) {
				
			},
			// 下架
			offShelf(item){
				
			},
			// 撤回
			withdraw (item) {
				
			},
			// 删除
			deleteGood (item) {
				
			},
			// 删除
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

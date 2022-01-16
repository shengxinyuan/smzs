<template>
	<view class="goods-index">
		<view v-show="!isOrder">
			<u-tabs ref="tabs" :is-scroll="true" :list="firstList" active-color="#ff5810" inactive-color="#606266" font-size="30" :current="first" @change="changeFirst"></u-tabs>
			<u-tabs ref="tabs" :is-scroll="true" :list="secondList" active-color="#ff5810" inactive-color="#606266" font-size="24" :current="second" @change="changeSecond"></u-tabs>
		</view>
		
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view scroll-y="true" class="goods-list">
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
					<view v-if="isOrder" class="index-btn" @click="editIndex(item)">
						修改
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="status-btn-cont">
			<view class="">
				提示：
			</view>
			<view class="txt">
				<view>1.按序号从小到大排序，序号可以重复</view>
				<view>2.可以切换目录来修改其中商品的顺序</view>
			</view>
			<view class="btn" v-if="!isOrder" @click="startOrder">调整排序</view>
			<view class="btn" v-else @click="saveOrder">保存排序</view>
		</view>
		
		<u-picker v-model="editShow" mode="selector" :default-selector="[current.index - 1]" :range="[1,2,3,4,5,6,7,8,9,10]" @confirm="confirmItemOrder"></u-picker>
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
				editShow: false,
				isOrder: false,
				sort_list: [],
				current: {},
			}
		},
		onLoad () {
			this.secondList = this.firstList[this.first].children;
			this.shop_list = [
				{
					id: 930,
					title: '商品930',
					sale: 10,
					price: 1000,
					index: 3,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					id: 931,
					title: '商品931',
					sale: 10,
					price: 1000,
					index: 3,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					id: 932,
					title: '商品932',
					sale: 10,
					price: 1000,
					index: 3,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				},
				{
					id: 933,
					title: '商品933',
					sale: 10,
					price: 1000,
					index: 3,
					image: 'http://zuanshi.semoh.cn/uploads/20210825/80552891ab2b03b711f359a2580e02f3.jpg',
				}
			];
		},
		methods: {
			queryList () {
				
			},
			// 编辑当前item
			editIndex (item) {
				this.editShow = true;
				this.current = item;
			},
			// 一级目录切换
			changeFirst (index) {
				this.first = index;
				this.second = 0;
				this.secondList = this.firstList[index].children;
			},
			// 二级目录切换
			changeSecond (index) {
				this.second = index;
			},
			// 确认修改
			confirmItemOrder (i) {
				const index = Number(i) + 1;
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
						item.index = index;
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
					type: 0,
					sort_list: this.sort_list
				}, { json: true }).then(res=>{
					if (res.status == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
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
		padding-bottom: 100rpx;
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

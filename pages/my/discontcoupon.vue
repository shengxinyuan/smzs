<template>
	<view class="content">
		<view class="p1" >
			<view :class="{tabs:current==index}" v-for="(item,index) in tabs" :key="index" @click="tabsChange(index)">
				{{item}}
				<view :class="{line:current==index}"></view>
			</view>
		</view>
		<!-- 未使用 -->
		<view v-if="current==0? true:false" style="padding: 3%;">
			<view class="p2 common" v-for="it in 2">
				<view class="i1">￥10
				<view>满一百可用</view></view>
				<view class="i2">
					<view>平台通用抵用券	</view>
					<view>有效期：2020-12-12-2021-6-12</view>
					<view>适用范围：黄金等贵金属可用</view>
				</view>
				
			</view>
		</view>
		<!-- 已使用 -->
		<view v-else-if="current==1? true:false" style="padding: 3%;">
			<view class="p4 common" v-for="it in 3">
				<view class="i1">￥10
				<view>满一百可用</view></view>
				<view class="i2">
					<view>平台通用抵用券	</view>
					<view>有效期：2020-12-12-2021-6-12</view>
					<view>适用范围：黄金等贵金属可用</view>
				</view>
			</view>
		</view>
		<!-- 已过期 -->
		<view v-else style="padding: 3%;">
			<view class="p4 common" v-for="it in 4">
				<view class="i1">￥10
				<view>满一百可用</view></view>
				<view class="i2">
					<view>平台通用抵用券	</view>
					<view>有效期：2020-12-12-2021-6-12</view>
					<view>适用范围：黄金等贵金属可用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabs: ['未使用','已使用','已过期'],
				current: 0,
				isUse: true,
				unused:[],//未使用1
				yishiy:[],//已使用0
				stale:[]//已过期2
				
			}
		},
		onShow() {
			this.$api.post('mycoupon').then(res=>{
				console.log(res)
				if(res.status==1){
					res.data.forEach(i=>{
						//未使用
						if(i.status == 1){
							this.unused.push(i)
						}else if(i.status == 0){
							this.yishiy.push(i)
						}else{
							this.stale.push(i)
						}
					})
				}
			})
		},
		methods:{
			tabsChange(index){
				console.log(this.unused)
				console.log(this.yishiy)
				console.log(this.stale)
				this.current = index;
			}
		}
	}
</script>
<style>
	page{
		background-color: #f6f6f6;
		font-size: 28rpx;
	}
</style>
<style lang="scss" scoped>
	.content{
		.p1{
			display: flex;
			justify-content: space-between;
			padding: 20rpx 80rpx 0;
			background-color: #fff;
			.tabs{
				font-size: 30rpx;
				font-weight: bold;
			}
			.line{
				width: 80rpx;
				border-bottom: 8rpx solid #ff680c;
				margin-top: 15rpx;
				border-radius: 40rpx;
			}
		}
		.p2{
			background: url(../../static/my/discount_coupon.png);
			
		}
		.p4{
			background: url(../../static/my/discount2.png);
			background-size: 100% 100%;
		}
		.common{
			background-size: 100% 100%;
			width: 100%;
			height: 195rpx;
			display: flex;
			// justify-content: space-between;
			// align-items: center;
			padding: 0 30rpx;
			margin: 15rpx 0;
			box-sizing: border-box;
			
			.i1{
				width: 38%;margin-top: 40rpx;
				font-size: 44rpx; color: #fff;
				view{
					font-size: 28rpx;line-height: 60rpx;
				}
			}
			.i2{
				margin-top: 38rpx;
				
				view:nth-child(1){
					font-size: 34rpx;font-weight: bold;
				}
				view:nth-child(2){
					font-size: 26rpx;color: #999;line-height: 66rpx;white-space: nowrap;
				}
				view:nth-child(3){
					font-size: 28rpx;color: #999;white-space: nowrap; 
				}
			}
			
		}
	}
</style>

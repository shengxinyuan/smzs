<template>
	<view class="content">
		<view class="p1" >
			<view :class="{tabs:current==index}" v-for="(item,index) in tabs" :key="index" @click="tabsChange(index)">
				{{item}}
				<view :class="{line:current==index}"></view>
			</view>
		</view>
		<!-- 未使用 -->
		<view v-if="current==0? true:false">
			<view class="p2 common" v-for="it in unused">
				<view class="i1">￥{{it.price}}</view>
				<view class="i2">
					<view>优惠券满{{it.money}}使用</view>
					<view>{{it.start_time}} 至 {{it.end_time}}</view>
				</view>
			</view>
		</view>
		<!-- 已使用 -->
		<view v-else-if="current==1? true:false">
			<view class="p4 common" v-for="it in yishiy">
				<view class="i1">￥{{it.price}}</view>
				<view class="i2">
					<view>优惠券满{{it.money}}使用</view>
					<view>{{it.start_time}} 至 {{it.end_time}}</view>
				</view>
			</view>
		</view>
		<!-- 已过期 -->
		<view v-else>
			<view class="p4 common" v-for="it in stale">
				<view class="i1">已过期</view>
				<view class="i2">
					<view>优惠券满{{it.money}}使用</view>
					<view>{{it.start_time}} 至 {{it.end_time}}</view>
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
		}
		.common{
			margin: 20rpx 30rpx;
			background-size: 100% 100%;
			width: 690rpx;
			height: 195rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 102rpx 0 30rpx;
			box-sizing: border-box;
			color: #fff;
			.i1{
				font-size: 44rpx;
			}
			.i2{
				view:nth-child(2){
					font-size: 40rpx;
				}
				view:nth-child(2){
					margin-top: 45rpx;
					font-size: 24rpx;
				}
			}
		}
	}
</style>

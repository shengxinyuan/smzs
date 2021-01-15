<template>
	<view>
		<view class="header_bait">
			<view class="toubu">
				<view class="header_left" @click="goto_top">
					<u-icon name="arrow-left" size="54"></u-icon>
				</view>
				<view class="center">
					<view class="center_it" > 
						确认支付
					</view>
				</view>
				<view class="head_share">
					<!-- 剩余支付 2分钟 -->
				</view>
			</view>
			<view class="price_num">
				￥ <text>188.20</text>
			</view>
		</view>
		<view class="payments">
			<view class="payment_item" v-for="(it,ind) in list" :key="ind">
				<view class="item_child">
					<view class="it_l">
						<image :src="it.img" mode=""></image>
					</view>
					<view class="it_c">
						{{it.name}}
						<view class="it_c_child">
							{{it.remake}}
						</view>
					</view>
				</view>
				<view class="item_child_r">
					 <view @click="radion(it.name,ind)">
						<label class="radio"><radio :checked="it.display" /></label>
						
					</view>
				</view>
			</view>
			<view class="payment_img">
				<image v-if="img_show == 0" src="../../static/my/qrcode.png" mode=""></image>
			</view>
		</view>
		<view class="but">
			<zs-button :buttitle="title"></zs-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						img:'../../static/my/payment/weixin.png',
						name:'微信支付',
						remake:'需扣除0.6%的手续费，方便快捷',
						display:true
					},
					{
						img:'../../static/my/payment/zhifub.png',
						name:'支付宝支付',
						remake:'需扣除0.6%的手续费，方便快捷',
						display:false
					},
					{
						img:'../../static/my/payment/yhka.png',
						name:'银行卡支付',
						remake:'无需手续费，需人工确认',
						display:false
					},
					{
						img:'../../static/my/payment/yue.png',
						name:'余额支付',
						remake:'可以余额 0 ',
						display:false
					},
					{
						img:'../../static/my/payment/zhuanzhang.png',
						name:'微信转账',
						remake:'无需手续费，需人工确认',
						display:false
					},
					{
						img:'../../static/my/payment/zfb_zhuanz.png',
						name:'支付宝转账',
						remake:'无需手续费，需人工确认',
						display:false
					},
				],
				title:'立即支付',
				img_show:0
			}
		},
		methods:{
			//返回上一页
			goto_top(){
				uni.navigateBack()
			},
			radion(e,ind){
				this.list.forEach(i=>{
					if(e == i.name){
						i.display = true
					}else{
						i.display = false
					}
				})
				this.img_show = ind
			}
		}
	}
</script>

<style lang="scss" scoped>
.header_bait{
	width: 100%;height: 280rpx;padding-top: 60rpx;
	position: fixed;left: 0;top: 0;z-index: 99;
	background-image: url(../../static/my/pay_bgomg.png);
	background-size: 100% 100%;
	.toubu{
		
		padding: 0 16rpx;
		line-height: 100rpx;
		display: flex;justify-content: space-between;
		color: #fff;
		.header_left{
			width: 20%;
		}
		.center{
			width: 60%;font-size: 32rpx;
			.center_it{
				// text-align: center;
				padding-left: 16%; 
				position: relative;
				&.active{
					color: #2d407a;
					&:before{
						content: '';
						position: absolute;
						left: 22%;
						bottom: 20%;
						transform: translateY(-50%);
						height: 7rpx;
						width: 56%;
						background-color: #2d407a;
						border-radius: 0 4px 4px 0;
						opacity: .8;
					}
				}
			}
		}
		.head_share{
			white-space: nowrap;
		}
	}
	.price_num{
		width: 100%;text-align: center;color: #fff;
		line-height: 80rpx;
		text{
			font-size: 40rpx;
		}
	}
}
.payments{
	width: 100%;padding: 0 4%;
	margin-top: 300rpx;
	.payment_item{
		width: 100%;
		display: flex;justify-content: space-between;margin-top: 20rpx;
		border-bottom: 1rpx solid #eee;height: 100rpx;
		.item_child{
			display: flex;
			.it_l{
				width: 58rpx;height: 56rpx;margin-right: 20rpx;line-height: 100rpx;
				image{
					width: 100%;height: 100%;
				}
			}
			.it_c{
				font-size: 32rpx;
				.it_c_child{
					font-size: 28rpx;color: #999;
				}
			}
		}
		.item_child_r{
			line-height: 100rpx;
		}
	}
	.payment_img{
		image{
			width: 80%;
		}
	}
}
.but{
	width: 100%;
	position: fixed;left: 0;bottom: 30rpx;
}
</style>

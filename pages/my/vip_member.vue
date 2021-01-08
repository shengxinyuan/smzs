<template>
	<view>
		<view class="header">
			<view class="header_l">
				<image src="../../static/index/share_moment.png" alt="">
				<view class="header_l_child">
					<view>你的名字</view>
					<text>2020-10-08 到期</text>
				</view>
			</view>
			<view class="header_r">
				<text>立即续费</text>
			</view>
		</view>
		<view class="cont">
			<zs-title :title="'专享特权'" ></zs-title>
			<view class="nav_nine">
				<view class="nav_items" v-for="(it,ind) in list" :key="ind">	
					<image :src="it.img" mode=""></image>
					<view>
						{{it.name}}
					</view>
				</view>
			</view>
			<!-- 小喇叭 -->
			<view class="trumpet">
				<image src="../../static/my/trumpet.png" mode=""></image>
				<text>会员连续包1年/2年/3年，分别立减  30元/ 40元/ 50元 </text> 
			</view>
			<!-- //购买 -->
			<view class="buy_vip">
				<view class="vip_item" :class="ind == buy_ind ? 'vip_item_act' : ''" v-for="(it,ind) in 3" :key="ind" @click="buy_cli(ind)">
					<view class="it_top">
						连续包 1 年
					</view>
					<view class="it_c">
						￥<text>398</text>
					</view>
					<view class="it_bot">
						￥428 /年
					</view>
				</view>
			</view>
			<view class="buy_vip_s">
				<view class="vip_item" :class="buy_ind_s == 1 ? 'vip_item_act' : ''" @click="buy_cli_s(1)">
					<view class="it_top">
						邀请好友免费享会员
					</view>
					<view class="it_c"></view>
					<view class="it_bot">
						邀请10名好友注册并开通会员即可享受一年免费会员哦
					</view>
					<view class="it_but">
						<u-icon name="plus-people-fill" color="#daa856" size="60"></u-icon>
						<view class="it_but_share">
							立即分享
						</view>
					</view>
				</view>
				<view class="vip_item" :class="buy_ind_s == 2 ? 'vip_item_act' : ''" @click="buy_cli_s(2)">
					<view class="it_top">
						体验 1 个月
					</view>
					<view class="it_c">
						￥<text>40</text>
					</view>
					<view class="it_bot">
						体验 1 个月
					</view>
				</view>
			</view>
			<!-- //开通按钮 -->
			<view class="op_but">
				立即开通
			</view>
			<view style="font-size: 26rpx;color: #999;padding: 0 20rpx;line-height: 36rpx;margin-bottom: 60rpx ;">
				开通注意事项
			</view>
			<!-- 问答 -->
			<zs-title :title="'专享特权'" ></zs-title>
			<view class="nav_nine">
				<view class="nav_items" v-for="(it,ind) in list_two" :key="ind" @click="cli_quest(it.name)">	
					<image :src="it.img" mode=""></image>
					<view>
						{{it.name}}
					</view>
				</view>
			</view>
			<!-- 回答 -->
			<view class="answer"> 
				<view class="answer_title">
					享批发价
				</view>
				<view class="answer_names">
					{{answer_name}}
				</view>
				<view class="answer_cont">
					操蛋的代码，精神压榨
				</view>
			</view>
		</view>
		<!-- //支付定位 -->
		<view class="pay_posi" v-if="buy_ind != -1">
			<view class="pay_posi_l">
				连续包 1 年
				<view>￥398</view>
			</view>
			<view class="pay_posi_l_r">
				立即开通
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						img:'../../static/my/fenxiao.png',
						name:'分销商城'
					},
					{
						img:'../../static/my/lingshou.png',
						name:'零售调价'
					},
					{
						img:'../../static/my/yinxiao.png',
						name:'社交营销'
					},
					{
						img:'../../static/my/vip_tuok.png',
						name:'引流拓客'
					},
					{
						img:'../../static/my/libao.png',
						name:'专属礼包'
					}
					
				],
				list_two:[
					{
						img:'../../static/my/onea.png',
						name:'一件起批'
					},
					{
						img:'../../static/my/oneb.png',
						name:'享批发价'
					},
					{
						img:'../../static/my/onec.png',
						name:'那货便捷'
					},
					{
						img:'../../static/my/oned.png',
						name:'周周上新款'
					},
					{
						img:'../../static/my/onee.png',
						name:'专属礼包'
					}
					
				],
				buy_ind:-1,
				buy_ind_s:0,
				answer_name:"一件起批"
			}
		},
		methods:{
			//购买会员
			buy_cli(e){
				this.buy_ind = e
				this.buy_ind_s = -1 //两个的取消状态
			},
			// 折扣分享
			buy_cli_s(e){
				this.buy_ind = -1 //三个的取消状态
				this.buy_ind_s = e
			},
			//问答
			cli_quest(e){
				this.answer_name = e
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.pay_posi{
		position: fixed;left: 0;bottom: 0;z-index: 99;
		width: 100%;background-color: #F1F1F1;display: flex;justify-content: space-between;padding: 16rpx 4%;
		.pay_posi_l{
			view{
				font-size: 32rpx;color: #daa856;font-weight: bold;
			}
		}
		.pay_posi_l_r{
			background-image: linear-gradient(90deg,#f1dab0,#ffcb6b);padding: 0 20rpx;line-height: 60rpx;height: 60rpx;margin-top: 10rpx;
			text-align: center;color: #52300f;font-size: 34rpx;
			border-radius: 50rpx;
		}
	}
	//问答
	.answer{
		width: 100%;padding: 40rpx;border-radius: 20rpx;
		background-color: #fdf6ec;margin-bottom: 150rpx;
		.answer_title{
			color: #60451a;font-size: 38rpx;text-align: center;font-weight: bold;
		}
		.answer_names{
			color: #60451a;font-size: 32rpx;font-weight: bold;line-height: 68rpx; 
		}
		.answer_cont{
			font-size: 30rpx;color: #999;line-height: 40rpx;
		}
	}
	.cont{
		width: 100%;padding: 0 3%;
		.nav_nine{
			display: flex;margin-top: 20rpx;padding: 20rpx;
			.nav_items{
				width: 20%;text-align: center;
				image{
					width: 100rpx;height: 100rpx;
				}
				view{
					line-height: 66rpx;color: #65390a;white-space: nowrap;font-size: 26rpx;
				}
			}
		}
		.trumpet{
			background-color: #fbf7eb;padding: 8rpx 0;border-radius: 50rpx;line-height: 40rpx;
			color: #66615a;display: flex;line-height: 58rpx;font-size: 26rpx;white-space: nowrap;
			image{
				width: 60rpx;
				height: 60rpx;margin-right: 10rpx;margin-left: 8rpx;
			}
		}
		//购买会员
		.buy_vip{
			width: 100%;
			margin-top: 24rpx;display: flex;justify-content: space-between;
			.vip_item{
				width: 30%;text-align: center;border: 4rpx solid #F1F1F1;padding: 20rpx;
				border-radius: 20rpx;
				.it_top{
					font-size: 30rpx;line-height: 66rpx;font-weight: bold;
				}
				.it_c{
					color: #daa856;
					text{
						font-size: 38rpx;font-weight: bold;line-height: 76rpx;
					}
				}
				.it_bot{
					color: #999;text-decoration: line-through;line-height: 60rpx;
				}
			}
			.vip_item_act{
				background-color: rgba(218,168,86,0.26);border: 4rpx solid #ffcb6b;
			}
		}
		.buy_vip_s{
			width: 100%;
			margin-top: 24rpx;display: flex;justify-content: space-between;
			.vip_item{
				width: 30%;text-align: center;border: 4rpx solid #F1F1F1;padding: 20rpx;
				border-radius: 20rpx;
				.it_top{
					font-size: 30rpx;line-height: 66rpx;font-weight: bold;
				}
				.it_c{
					color: #daa856;
					text{
						font-size: 38rpx;font-weight: bold;line-height: 76rpx;
					}
				}
				.it_bot{
					color: #999;line-height: 40rpx;
				}
				.it_but{
					display: flex;justify-content: space-between;line-height: 50rpx;
					.it_but_share{
						background-color: #daa856;margin-top: 10rpx;
						;padding: 0 20rpx;border-radius: 40rpx; 
					}
				}
			}
			.vip_item:nth-child(1){
				width: 66%;
			}
			.vip_item_act{
				background-color: rgba(218,168,86,0.26);border: 4rpx solid #ffcb6b;
			}
		}
		//立即开通
		.op_but{
			width: 96%;background-image: linear-gradient(90deg,#f1dab0,#ffcb6b);
			line-height: 90rpx;text-align: center;color: #52300f;font-size: 34rpx;font-weight: bold;
			border-radius: 50rpx;margin: 40rpx 0 20rpx 2%;
		}
	}
	.header{
		width: 100%;height: 300rpx;
		background-image: url(../../static/my/vip_backimg.png);
		background-size: 100% 100%;
		display: flex;justify-content: space-between;
		.header_l{
			padding-left: 52rpx;padding-top: 100rpx;display: flex;
			image{
				width: 100rpx;height: 100rpx;border-radius: 50%;margin-right: 20rpx;
			}
			.header_l_child{
				view{
					font-size: 34rpx;line-height: 60rpx;font-weight: bold;
				}
				text{
					color: #999;
				}
			}
		}
		.header_r{
			margin-right: 52rpx;padding-top: 130rpx;color: #fff;
			text{
				display: inline-block;
				padding: 10rpx 28rpx;border-radius: 50rpx;
				background-color: rgba(0,0,0,0.4);
			}
		}
	}
</style>

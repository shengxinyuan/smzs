<template>
	<view class="cont">
		<view class="head">
			<view class="head_left">
				<view class="head_left_child" :class="{active:ind == heat_ind}" v-for="(it,ind) in list" :key="ind" @click="shai_cli(ind,it.id)">
					{{it.name}}
					<view v-if="ind == 2">{{it.name}} <u-icon></u-icon></view>
				</view>
				<view class="head_left_child" :class="{active:heat_ind == 2}" v-if="price_type == 2" @click="shai_cli(2,2)">
					价格
					<u-icon name="arrow-up" ></u-icon>
				</view>
				<view class="head_left_child" :class="{active:heat_ind == 2}" v-else @click="shai_cli(2,1)">
					价格
					<u-icon name="arrow-down" v-if="price_type == 1" ></u-icon>
				</view>
			</view>
			<view class="head_right">
				<view class="head_right_c" v-if="type==1" @click="cli_type(1)">
					<u-icon name="grid" size="40"></u-icon>
				</view>
				<view class="head_right_c" v-else @click="cli_type(2)">
					<u-icon name="list-dot" size="44"></u-icon>
				</view>
				<view class="">
					<zs-classifytype></zs-classifytype> 
				</view>
			</view>
		</view>
		<view class="cont_list" v-if="type==1">
			<view class="cont_item" v-for="(it,ind) in 6" :key="ind" @click="go_shopdetail(1)" >
				<image class="imagea" src="../../static/zhek.png" mode="aspectFill"></image> <!-- 爆款推荐 -->
				<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
				<view class="it_tit">
					黄金手镯 18k金 钻石挚爱
				</view>
				<view class="it_price">
					￥2298
				</view>
				<view class="it_selt">
					<view class="it_selt_l">
						<text>￥1980</text><image src="../../static/pifa.png" mode=""></image>
					</view>
					<view class="it_selt_r">
						已售45512件
					</view>
				</view>
			</view>
		</view>
		<view class="cont_list_two" v-else>
			<view class="cont_item" v-for="(it,ind) in 6" :key="ind" @click="go_shopdetail(1)" >
				<view class="item_img">
					<!-- <image class="imagea" src="../../static/zhek.png" mode="aspectFill"></image> -->
					<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
				</view>
				<view class="it_text">
					<view class="it_tit">
						24K黄金手镯 18k金 钻石挚爱一生
					</view>
					<view class="it_text_cen">
						<view class="it_price">
							￥2298
						</view>
						<view class="it_selt_l">
							<text>￥1980</text><image src="../../static/pifa.png" mode=""></image>
						</view>
					</view>
					<view class="it_label">
						<view>精品</view>
					</view>
					<view class="it_selt_r">
						已售45512件
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
				list:[
					{name:'新品'},
					{name:'热销'},
				],
				type:0,//商品列表
				heat_ind: -1,// 导航
				price_type:0
			};
		},
		methods:{
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			cli_type(e){
				console.log(e)
				if(this.type == 1){
					this.type = 2
				}else{
					this.type = 1
				}
			},
			//筛选点击
			shai_cli(e,type){
				console.log(type)
				this.heat_ind = e
				if(type == 2){
					this.price_type = 1
				}else{
					this.price_type = 2
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
//筛选条件
.head{
	width: 100%;height: 88rpx;display: flex;background-color: #fff;color: #555555;
	.head_left{
		line-height: 88rpx;
		width: 60%;
		display: flex;justify-content: space-between;
		.head_left_child{
			width: 33%;text-align: center;
			position: relative;
			&.active{
				font-weight: bold;
				color: #2d407a;
				// background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					// left: 35%;
					// top: 88%;
					transform: translateY(-50%);
					// height: 6rpx;
					// width: 30%;
					background-color: #2d407a;
					opacity: .8;
					
				}
			}
		}
	}
	.head_right{
		width: 40%;text-align: center;
		display: flex;justify-content: space-around;line-height: 88rpx;
		.head_right_c{
			width: 40%;line-height: 64rpx;padding-top: 6rpx;
			height: 58rpx;border-right: 2rpx solid #666;margin-top: 15rpx;
		}
	}
}

.cont_list_two{
	width: 100%;padding: 0 3%;
	.cont_item{
		width: 100%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden; padding: 20rpx 20rpx 10rpx 10rpx;
		display: flex;
		
		.item_img{
			// position: relative;
			// .imagea{
			// 	width: 70rpx;height: 84rpx;
			// 	position: absolute;left: 22rpx;top: 0;
			// 	z-index: 20;
			// }
			.images{
				width: 240rpx;
				height:240rpx;
			}
		}
		.it_text{
			.it_tit{
				font-size: 30rpx;width: 96%;height: 80rpx;overflow: hidden;
			}
			.it_text_cen{
				display: flex;white-space: nowrap;
				margin: 8rpx 0;
				.it_price{
					font-weight: bold;font-size: 30rpx;line-height: 60rpx;
					width: 150rpx;
				}
				.it_selt_l{
					padding-top: 10rpx;display: flex;
					text{
						color: #ea5b72;font-size: 26rpx;
					}
					image{
						width: 80rpx; height: 28rpx;margin-top: 6rpx;
					}
				}
			}
			.it_label{
				width: 100%;display: flex;
				view{
					font-size: 22rpx;
					padding: 0 8rpx;border: 2rpx solid #DD524D;color: #DD524D;
					border-radius: 6rpx;
				}
			}
			.it_selt_r{
				color: #998;line-height: 50rpx;font-size: 26rpx;margin-top: 12rpx;
				
			}
		}
		
	}
}
.cont_list{
	width: 100%;
	display: flex;flex-wrap: wrap;padding: 0 3%;
	
	.cont_item{
		width: 49%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden; padding: 2%;
		position: relative;
		.imagea{
			width: 70rpx;height: 84rpx;
			position: absolute;left: 22rpx;top: 0;
			z-index: 20;
		}
		.images{
			width: 100%;
			height: 280rpx;
		}
		.it_tit{
			font-size: 30rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 60rpx;
		}
		.it_price{
			font-weight: bold;font-size: 30rpx;line-height: 60rpx;
		}
		.it_selt{
			width: 100%;display: flex;justify-content: space-between;
			line-height: 40rpx;
			.it_selt_l{
				padding-top: 10rpx;display: flex;
				text{
					color: #ea5b72;font-size: 26rpx;
				}
				image{
					width: 80rpx; height: 28rpx;margin-top: 6rpx;
				}
			}
			.it_selt_r{
				width: 150rpx;
				color: #998;line-height: 50rpx;font-size: 26rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
	}
	.cont_item:nth-child(2n+2){ 
		margin-right: 0;
	}
}
</style>

<template>
	<view>
		<view class="nav_head">
			<view class="head_item"  v-for="(it,ind) in list" :key="ind" @click="navhead_cli(ind)">
				<view class="it_tiem" :class="{acts: ind == navIndex}">
					{{it.time}}
				</view>
				<text class="it_tit" :class="{active:navIndex == ind}">
					{{it.title}}
				</text>
			</view>
		</view>
		<view class="down_time">
			<view class="s-header_child">
				距结束<text class="hour_timer">{{end_seckill}}</text>
			</view>
			<view class="" style="color: #666;">
				限时秒杀最后疯抢
			</view>
		</view>
		<view class="shop_cont">
			<zs-shoplist-seckill></zs-shoplist-seckill>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						time:'14:00',
						title:'抢购中'
					},
					{
						time:'14:00',
						title:'即将开抢'
					},
					{
						time:'14:00',
						title:'即将开抢'
					}
				],
				navIndex:0,
				end_time:'1611912417',//秒杀到期
				end_seckill:'00天00:00:00',//倒计时
			}
		},
		onLoad(){
			this.ent_time_s()
		},
		methods:{
			navhead_cli(e){
				this.navIndex = e
			},
			//秒杀倒计时
			ent_time_s(){
				let data = new Date()
				let state = data.getTime()
				let reslut = this.end_time *1000 - state
				let tim = setInterval(()=>{
					if(reslut <= 0){
						clearInterval(tim)
						this.end_seckill = "秒杀已结束"
					}else{
						reslut -=1000
						this.end_seckill = this.ss(reslut)
					}
				},1000)
				
			},
			ss(e){
				let [day,hh,ff,ss] = [0,0,0,0]
				day = Math.floor(e / 1000 / 60 / 60 / 24);
				hh = Math.floor(e /1000/60/60 % 24)
				ff = Math.floor(e /1000/60 % 60)
				ss = Math.floor(e /1000 %60)
				let d = day > 9 ? day : '0'+day
				let h = hh > 9 ? hh : '0'+hh
				let m = ff > 9 ? ff : `0${ff}`;
				let s = ss > 9 ? ss : `0${ss}`;
				// console.log( d+"天"+h+":"+m+":"+s)
				return d +'天'+h+":"+m+":"+s 
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style scoped lang="scss">
	
	.nav_head{
		width: 100%;padding: 16rpx 3%;
		background-color: white;
		display: flex;
		.head_item{
			width: 33%;text-align: center;
			.it_tiem{
				font-size: 36rpx;font-weight: bold;
			}
			.acts{
				color: #e8372f;
			}
			.it_tit{
				display: inline-block;
				font-size: 28rpx;color: #666;
			}
			.active{
				padding: 0 20rpx;border-radius: 50rpx;
				color: white;background-color: #e8372f;
			}
		}
		
	}
	.down_time{
		width: 100%;padding: 0 3%;margin-top: 20rpx;display: flex;justify-content: space-between;
		.s-header_child{
			color: #333333;
			.hour_timer{
				display: inline-block;margin: 0 20rpx;color: #e8372f;font-size: 30rpx;
			}
		}
	}
	.shop_cont{
		padding:  0 3%;
	}
</style>

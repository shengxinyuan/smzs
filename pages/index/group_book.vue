<template>
	<view>
		<view class="head">
			<zs-texture></zs-texture>
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

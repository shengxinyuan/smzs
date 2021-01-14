<template>
	<view>
		<view class="search">
			<zs-inputs @searchClick="searchClick" :texts="'请输入您想搜索的内容'"></zs-inputs>
		</view>
		<view class="but_type">
			<view class="but_type_child" :class="{active:type_ind == ind}"  v-for="(it,ind) in list" :key="ind" @click="type_cli(ind)">
				{{it.a}}
			</view>
		</view>
		<!-- 视频 -->
		<view class="video_list" v-for="(it,ind) in vid" :key="ind">
			<view class="images" v-if="it.vid_show" @click="vid_creat(it.id)" :style="{'background-image': it.bgimg}">
				<text>{{it.tit}}</text>
			</view>
			<video :src="cart" @play="play(it.id)" :id="'video'+it.id" @ended="end_vid(ind)" poster="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1603365312,3218205429&os=1116313301,536553700&simid=4189071781,572287113&pn=7&rn=1&di=122870&ln=1668&fr=&fmq=1610335684409_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fa0.att.hudong.com%252F52%252F62%252F31300542679117141195629117826.jpg%26refer%3Dhttp%253A%252F%252Fa0.att.hudong.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1612927683%26t%3D8e5f53bdfb13c6d592b38a52ea60302f&rpstart=0&rpnum=0&adpicid=0&force=undefined" v-else :autoplay="true" controls></video>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{a:'使用技巧'},
					{a:'提现体系'},
					{a:'商城设置'},
					{a:'常见问题'}
				],
				type_ind:0,
				cart:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
				playind:0,
				vid:[
					{
						src:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
						tit:'如何开通体验超级会员?',
						bgimg:'url(../../static/my/vip_video.png)',
						vid_show:true,
						id:2
					},
					{
						src:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
						tit:'下单后如何付款?',
						bgimg:'url(../../static/my/vip_order.png)',
						vid_show:true,
						id:5
					}
				],
				videoContent:''
			}
		},
		methods:{
			//搜索
			searchClick(e){
				
			},
			//类型
			type_cli(e){
				this.type_ind = e
				
			},
			vid_creat(e){
				this.vid.forEach((item, index) =>{	// 获取json对象并遍历, 停止非当前视频
					if (item.id != e){
						item.vid_show = true
					}else{
						item.vid_show = false
					}
				})
			},
			//开始播放
			play(e){
				let _this = this;
				let currentId = 'video' + e;// 获取当前视频id
				this.videoContent = uni.createVideoContext(currentId,_this).play();
				
				// 获取视频列表
				let trailer = this.vid;
				trailer.forEach((item, index) =>{	// 获取json对象并遍历, 停止非当前视频
					if (item.src != null && item.src != "") {
						let temp = 'video' + item.id;
						if (temp != currentId) {
							// 暂停其余视频
							uni.createVideoContext(temp,_this).pause(); //暂停视频播放事件
						}
					}
	 
				})
				
			},
			//结束播放
			end_vid(e){
				
			}
		}  
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
.search{
	margin: 30rpx 0 ;
}
.but_type{
	width: 100%;padding: 0 5%;display: flex;justify-content: space-between;margin-bottom: 40rpx;
	.but_type_child{
		background-color: white;padding: 8rpx 20rpx;border-radius: 40rpx;border: 1rpx solid #fff;
	}
	.active{
		border: 1rpx solid #283b77;color: #283b77;background-color: #eff3ff;
	}
}

.video_list{
	width: 100%;padding: 0 4%;margin-bottom: 30rpx;
	.images{
		width: 100%;height: 280rpx;background-size: 100% 100%;
		padding-top: 180rpx;text-align: center;
		text{
			font-size: 34rpx;color: #fff;
		}
	}
	video{
		width: 100%;height: 280rpx;
	}
}

</style>

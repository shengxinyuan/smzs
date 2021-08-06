<template>
	<view style="padding: 3%;">
		<view class="items" v-if="true" v-for="(it,ind) in list" :key="ind">
			<view class="items_time">
				{{it.create_time}}
			</view>
			<view class="items_cont">
				<view class="items_cont_text">
					{{it.title}}
				</view>
				<view class="cont_content" v-if="it.cont_show">
					{{it.content}}
				</view>
				<view class="items_cont_child" @click="new_detail(ind)">
					<view class="child_l">
						{{it.cont_show == true?'收起':'展开'}}
					</view>
					<view style="color: #999;">
						＞
					</view>
				</view>
			</view>
		</view>
		<view class=""
		style="height: 100rpx;display: flex;align-items: center;justify-content: center;font-size: 30rpx;color: #999;" v-if="list.length > 0">
			{{ loadingText }}
		</view>
		<view style="padding-top: 150rpx;" v-else>
			<u-empty text="暂无消息" mode="message"></u-empty>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cate_id:0,
				list:[],
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
			}
		},
		onLoad(op){
			this.cate_id = op.cate_id,
			this.page_reader()
		},
		onReachBottom() {
			if(this.current_page === this.last_page){
				this.loadingText = '没有更多了'
				return
			}
			if(this.loadingText === '正在加载中...'){
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.page_reader()
		},
		methods:{
			page_reader(){
				this.$api.get('message',{page:this.current_page,cate_id:this.cate_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						
						var a = res.data.data.current_page
						var b = res.data.data.last_page
						console.log(a,b)
						if (res.data.data.data) {
							this.last_page = res.data.data.last_page
							this.current_page = res.data.data.current_page
							this.list = this.list.concat(res.data.data.data) 
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
						// this.list = res.data.data.data
						this.list.forEach(o=>{
							o.cont_show = false
						})
					}
				})
			},
			//详情
			new_detail(e){
				this.list[e].cont_show = !this.list[e].cont_show
				this.$forceUpdate()
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
.items{
	
	width: 100%;
	.items_time{
		text-align: center;line-height: 66rpx;color: #999999;line-height: 88rpx;
	}
	.items_cont{
		background-color: #fff;padding: 22rpx;
		.items_cont_text{
			color: #999;line-height: 44rpx;
		}
		.cont_content{
			
		}
		.items_cont_child{
			display: flex;justify-content: space-between;border-top: 1rpx solid #f1f1f1;margin-top: 22rpx;padding-top: 22rpx;
			.child_l{
				color: #007AFF;
			}
		}
	}
}
</style>

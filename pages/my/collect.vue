<template>
	<view style="padding-bottom: 100rpx;">
		<uni-nav-bar  :right-text="isShow?'管理':'完成'" title="我的收藏" left-icon="back" @clickLeft="gotop" @clickRight="right" :textcolor="textcolor"/>
		<view class="cont">
			<zs-collect-list :type_check="type_check" :page_del="page_del" @checkbox="checkbox" @long="long"></zs-collect-list>
		</view>
		<view class="footer" v-if="page_del">
			<view @click="qx_check">
				<checkbox value="cb" :checked="qx_cli" />全选
			</view>
			<view class="" @click="del_cellect">
				<u-icon name="trash" size="40"></u-icon>
				删除
			</view>
		</view>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				isShow:true,
				textcolor:'',
				xuanxind:[],
				page_del:false,//复选显示
				type_check:false,//选中状态
				qx_cli:false
			}
		},
		watch:{
			// every监听全部为true时返回true,keep深度
			
		},
		methods:{
			gotop(){
				uni.navigateBack()
			},
			//长按
			long(){
				this.right()
			},
			//管理
			right(){
				this.isShow = !this.isShow
				console.log(this.isShow)
				if(this.isShow == false){
					this.textcolor = "#2b3f7d"
					this.page_del = true
				}else{
					this.textcolor = ""
					this.page_del = false
				}
			},
			//选择
			checkbox(e){
				console.log(e)
				if (this.xuanxind.indexOf(e) == -1) {
					this.xuanxind.push(e);//选中添加到数组里
				} else {
					this.xuanxind.splice(this.xuanxind.indexOf(e), 1); //取消
				}
			},
			//全选
			qx_check(){
				this.type_check = !this.type_check
				//循环获取id
				
			},
			//删选
			del_cellect(){
				let that = this
				uni.showModal({
					content:"您确定要删除选中收藏吗？",
					success(a) {
						if(a.confirm){
							let arr = ''
							that.xuanxind.forEach(i=>{
								arr += i +','
							})
							
							console.log(arr.substr(arr,arr.length -1))
						}
					}
				})
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
	.cont{
		width: 100%;padding: 0 1%;
	}
	.footer{
		position: fixed;left: 0;bottom: 0;z-index: 20;
		width: 100%;height: 90rpx;background-color: #fff;padding: 0 4%;
		display: flex;justify-content: space-between;line-height:90rpx;
		
	}
</style>

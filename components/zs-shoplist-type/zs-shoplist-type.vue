<template>
	<view class="cont">
		<view class="head" :style="{position: fixed,left: 0,top: tops}">
			<view class="head_left">
				<view class="head_left_child" :class="{active:heat_ind == 1}" @click="shai_cli(1,sale)">
					热销
					<u-icon name="arrow-up" v-if="sale == 1" ></u-icon>
					<u-icon name="arrow-down" v-if="sale == 2"></u-icon>
				</view>
				<view class="head_left_child" :class="{active:heat_ind == 2}"  @click="shai_cli(2,price_type)">
					价格
					<u-icon name="arrow-up" v-if="price_type == 1" ></u-icon>
					<u-icon name="arrow-down" v-if="price_type == 2"></u-icon>
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
					<view class="shai" @click="shaix">
						<text>筛选</text><image src="../../static/loudou.png" mode=""></image>
					</view>
					<u-popup v-model="show" mode="right" >
						<view class="popups">
							<view class="item" v-for="(it,ind) in lists" :key="ind">
								<view class="item_tit">
									{{it.name}}
								</view>
								<view class="item_child" >
									<view class="child_v" v-for="(cit,index) in it.data" @click="cli_it(cit.id,ind,index)"
									:class="{active:cit.state == true}">
										{{cit.title}}
									</view>
									<!-- {{index}} -->
								</view>
							</view>
							<view class="item">
								<view class="item_tit">
									金重
								</view>
								<view class="item_child" >
									<view class="child_v">
										<input type="text" placeholder="最低" v-model="min_g" name="" id=""> 
									</view>——
									<view class="child_v">
										<input type="text" placeholder="最高" v-model="max_g">
									</view>
									<!-- {{index}} -->
								</view>
							</view>
							
							<view class="but">
								<view @click="reset">
									重置
								</view>
								<view @click="shop_confim">确定</view>
							</view>
						</view>
					</u-popup>
				</view>
			</view>
		</view>
		<view class="cont_list" v-if="type==1" :style="{'padding-top':paddingTop}">
			<view class="cont_item" v-for="(it,ind) in shop_list" :key="ind" @click="go_shopdetail(it.id)" >
				<image class="imagea" v-if="it.is_recommend == 1" src="../../static/zhek.png" mode="aspectFill"></image> <!-- 爆款推荐 -->
				<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
				<view class="it_tit">
					{{it.title}}
				</view>
				<view class="it_price">
					￥{{ it.price }}
				</view>
				<view class="it_selt">
					<view class="it_selt_l">
						<text>￥{{it.price_vip}}</text><image src="../../static/pifa.png" mode=""></image>
					</view>
					<view class="it_selt_r">
						已售{{it.sale}}件
					</view>
				</view>
			</view>
		</view>
		<view class="cont_list_two" v-else :style="{'padding-top':paddingTop}">
			<view class="cont_item" v-for="(it,ind) in shop_list" :key="ind" @click="go_shopdetail(it.id)" >
				<view class="item_img">
					<!-- <image class="imagea" src="../../static/zhek.png" mode="aspectFill"></image> -->
					<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
				</view>
				<view class="it_text">
					<view class="it_tit">
						{{it.title}}
					</view>
					<view class="it_text_cen">
						<view class="it_price">
							￥{{ it.price }}
						</view>
						<view class="it_selt_l">
							<text>￥{{it.price_vip}}</text><image src="../../static/pifa.png" mode=""></image>
						</view>
					</view>
					<view class="it_label">
						<view v-if="it.is_recommend == 1">精品</view>
					</view>
					<view class="it_selt_r">
						已售{{it.sale}}件
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
				type:0,//商品列表
				heat_ind: -1,// 导航
				price_type:0,//排序 1-降序 2-升序		
				show:false,
				sale:0, //	排序 1-降序 2-升序			
				key:'', //	关键字
				cate_id:0,//分类id
				shop_label_cate_id:0,//筛选款式
				shop_label_texture_id:0,//筛选材质
				sku_value:'', //筛选时sku的值
				shop_subject_id: 0,//专题
				min_g:'', //最小重量
				max_g:'', //最大重量
			};
		},
		props:{
			tops:{default:0},//定位
			paddingTop:{default:0},//上内
			lists:{},//商品筛选条件
			fixed:{default:'none'},
			shop_list:{},
			cate_fist_id:{}
		},
		methods:{
			//点击选项
			cli_it(mid,find,index){
				let arr = this.lists[find]
				// console.log(find,arr)
				arr.data.forEach(a=>{
					a.state = false
				})
				arr.data[index].state = true
				this.$forceUpdate()
				//获取参数
				if(find == 0){
					arr.data.forEach(i=>{
						if(i.state == true){
							this.cate_id = i.id
							console.log(this.cate_id)
						}
					})
				}else if(find == 1){
					arr.data.forEach(i=>{
						if(i.state == true){
							this.shop_label_cate_id = i.id
							console.log(this.cate_id)
						}
					})
				}else if(find == 2){
					arr.data.forEach(i=>{
						if(i.state == true){
							this.shop_label_texture_id = i.id
							console.log(this.cate_id)
						}
					})
				}
			},
			//重置
			reset(){
				this.sale = ''
				this.price_type = ''
				this.key ='' //	关键字
				this.cate_id =''//分类id
				this.shop_label_cate_id =''//筛选款式
				this.shop_label_texture_id=''//筛选材质
				this.sku_value ='' //筛选时sku的值
				this.shop_subject_id =''//专题
				this.min_g ='' //最小重量
				this.max_g ='' //最大重量
				this.lists.forEach(a=>{
					a.data.forEach(b=>{
						b.state = false
					})
					console.log(a.data)
				})
				this.$forceUpdate()
			},
			//确定
			shop_confim(){
				let data = {
					sale:this.sale,
					price:this.price_type,
					key:this.key, //	关键字
					cate_id:this.cate_id,//分类id
					cate_fist_id:this.cate_fist_id,//筛选分类
					shop_label_cate_id:this.shop_label_cate_id,//筛选款式
					shop_label_texture_id:this.shop_label_texture_id,//筛选材质
					sku_value:this.sku_value, //筛选时sku的值
					shop_subject_id: this.shop_subject_id,//专题
					min_g:this.min_g, //最小重量
					max_g:this.max_g, //最大重量
				}
				this.$emit('shop_confim',data)
				this.show = false
			},
			//筛选
			shop_remder(){
				let data = {
					sale:this.sale,
					price:this.price_type,
					key:this.key, //	关键字
					cate_id:this.cate_id,//分类id
					cate_fist_id:this.cate_fist_id,//筛选分类
					shop_label_cate_id:this.shop_label_cate_id,//筛选款式
					shop_label_texture_id:this.shop_label_texture_id,//筛选材质
					sku_value:this.sku_value, //筛选时sku的值
					shop_subject_id: this.shop_subject_id,//专题
					min_g:this.min_g, //最小重量
					max_g:this.max_g, //最大重量
				}
				this.$api.post('goods',data).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			shaix(){
				this.show = true
			},
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
				console.log(e)
				this.heat_ind = e
				//销量
				if(e == 1){
					if(type == 0){
						this.sale = 1
					}else if(type == 1){
						this.sale = 2
					}else{
						this.sale = 1
					}
					this.shop_remder()
				}else{
					if(type == 0){
						this.price_type = 1
					}else if(type == 1){
						this.price_type = 2
					}else{
						this.price_type = 1
					}
					this.shop_remder()
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
	.popups{
		padding: 80rpx 30rpx 130rpx 30rpx;width: 640rpx;
		position: relative;
		.but{
			position: fixed;left: 0;bottom: 40rpx;
			width: 100%;
			display: flex;justify-content: space-around;height: 70rpx;line-height: 70rpx;
			view{
				width: 40%;border-radius: 50rpx;
			}
			view:nth-child(1){
				border: 1rpx solid #666;background-color: white;
			}
			view:nth-child(2){
				border: 1rpx solid #2A3E7B;
				background-color: #2A3E7B;color: white;
			}
		}
		.item{
			.item_tit{
				text-align: left;line-height: 70rpx;font-weight: bold;
			}
			.item_child{
				width: 100%;
				display: flex;flex-wrap: wrap;
				.child_v{
					width: 31%;margin: 10rpx 1%;overflow: hidden;white-space: nowrap;
					height: 60rpx;background-color: #EEEEEE;line-height: 56rpx;border-radius: 50rpx;
					border: 1rpx solid #eee;
					&.active{
						background-color: #F6F8FF;
						border: 1rpx solid #9FA8C5;
					}
					input{
						height: 60rpx;font-size: 30rpx;
					}
				}
			}
		}
	}
//筛选条件
.head{
	width: 100%;height: 88rpx;display: flex;background-color: #fff;color: #555555; 
	z-index: 21;
	.head_left{
		line-height: 88rpx;
		width: 60%;
		display: flex;justify-content: space-between;
		.head_left_child{
			width: 50%;text-align: center;
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
		.shai{
			display: flex;
			image{
				padding-top: 28rpx;
				width: 30rpx;height: 30rpx;margin: 4rpx;
			}
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

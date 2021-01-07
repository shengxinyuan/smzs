<template>
	<view class="container">
		<view class="header_bait"></view>
		<view class="header">
			<view class="header_left" @click="goto_top">
				<u-icon name="arrow-left" size="60"></u-icon>
			</view>
			<view class="header_left" @click="share">
				<u-icon name="zhuanfa" size="60"></u-icon>
			</view>
		</view>
		
		<view class="carousel">
			<swiper indicator-dots :circular="true" :autoplay="true" :duration="400" :interval="3000">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.src" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">恒源祥2019春季长袖白色t恤 新款春装</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">341.6</text>
				<text class="m-price">¥488</text>
				<text class="coupon-tip">7折</text>
			</view>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>
		
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
		</view>
		
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<u-parse :html="desc"></u-parse>
		</view>
		<!-- //推荐 -->
		<image style="width: 100%;height: 80rpx;margin-top: 20rpx;" src="../../static/my/tuijain_bgimg.png" mode=""></image>
		<view style="padding: 0 3%;">
			<zs-shopping-list></zs-shopping-list> 
		</view>
		
		<view class="add_bottom">
			<view class="add_con">
				<view class="three_icons" @click="go_custr">
					<u-icon name="kefu-ermai" color="#ccc" size="38" class="s_icon"></u-icon>
					<view>客服</view>
				</view>
				<view class="three_icons" @click="goto_car">
					<u-icon name="shopping-cart" color="#ccc" size="38" class="s_icon"></u-icon>
					<view>购物车</view>
				</view>
				<view class="three_icons">
					<view  v-if="true">
						<u-icon class="s_icon" name="star-fill" color="#DD524D" size="38" @click="like_collect"  ></u-icon>
						<view style="color: #DD524D;">已收藏</view>
					</view>
					<view v-else >
						<u-icon class="s_icon" name="star" color="#ccc" size="38"  @click="like_collect"></u-icon>
						<view>收藏</view>
					</view>
					
				</view>
				<view class="anniu">
					<view class="add_car" @click="payment_yes(0)">加入购物车</view>
					<view class="buy" @click="payment_yes(1)">立即购买</view>
				</view>
				
			</view>
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<zs-share 
			ref="share" 
			:contentHeight="400"
		></zs-share>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				specClass: 'none',
				specSelected:[],
				
				favorite: true,
				shareList: [],
				imgList: [
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				],
				desc: `
					<div style="width:100%">
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
					</div>
				`,
				specList: [
					{
						id: 1,
						name: '尺寸',
					},
					{	
						id: 2,
						name: '颜色',
					},
				],
				specChildList: [
					{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		async onLoad(options){
			
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			if(id){
				this.$api.msg(`点击了${id}`);
			}
			
			
			//规格 默认选中第一条
			this.specList.forEach(item=>{
				for(let cItem of this.specChildList){
					if(cItem.pid === item.id){
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			})
		},
		methods:{
			//返回上一页
			goto_top(){
				uni.navigateBack()
			},
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
				
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){}
		},
	}
</script>

<style>
	page{
		background: #f1f1f1; 
	}
</style>
<style lang="scss" scoped>
	page{
		
		padding-bottom: 160upx;
		padding-top: 60rpx;
	}
	.header_bait{
		width: 100%;height: 60rpx;background-color: white;
		position: fixed;left: 0;top: 0;z-index: 99;
	}
	.header{
		width: 100%;height: 100rpx;display: flex;justify-content: space-between;padding: 0 4%;
		position: absolute;left: 0;top: 66rpx;z-index: 20;
		
		.header_left{
			text-align: center;padding-top: 12rpx;
			width: 80rpx;height: 80rpx;background-color: rgba(0,0,0,0.5);border-radius: 50%;
			color: #fff;
		}
	}
	.icon-you{
		/* font-size: $font-base + 2upx; */
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			/* color: $font-color-dark; */
			height: 50upx;
			line-height: 50upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			/* color:$uni-color-primary; */
		}
		.price{
			/* font-size: $font-lg + 2upx; */
		}
		.m-price{
			margin:0 12upx;
			/* color: $font-color-light; */
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			/* background: $uni-color-primary; */
			/* font-size: $font-sm; */
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			/* font-size: $font-sm; */
			/* color: $font-color-light; */
			text{
				flex: 1;
			}
		}
	}
	
	.c-list{
		/* font-size: $font-sm + 2upx; */
		/* color: $font-color-base; */
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			/* color: $font-color-dark; */
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			/* font-size: $font-sm+2upx; */
			/* color: $font-color-dark; */
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			/* color: $font-color-dark; */
			line-height: 40upx;
		}
		.red{
			/* color: $uni-color-primary; */
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			/* font-size: $font-sm + 2upx; */
			/* color: $font-color-light; */
			.tit{
				/* font-size: $font-base + 2upx; */
				/* color: $font-color-dark; */
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			/* font-size: $font-base; */
			/* color: $font-color-base; */
			padding-left: 26upx;
			.con{
				/* font-size: $font-base; */
				/* color: $font-color-dark; */
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				/* font-size: $font-sm; */
				/* color:$font-color-light; */
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-dark; */
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				/* font-size: $font-sm + 2upx; */
				/* color: $font-color-base; */
				line-height: 42upx;
				.price{
					/* font-size: $font-lg; */
					/* color: $uni-color-primary; */
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-base; */
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				/* font-size: $font-base; */
				/* color: $font-color-dark; */
			}
			.selected{
				background: #fbebee;
				/* color: $uni-color-primary; */
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				/* background: $uni-color-primary; */
				/* font-size: $font-base + 2upx; */
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	/* 购买 */
	.add_bottom{
		z-index: 99;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		border-top: 1rpx solid #e2e2e2;
		.add_con{
			width: 695rpx;
			height: 70rpx;
			margin: 15rpx auto;
			display: flex;
			justify-content: space-between;
			.s_icon{
				margin-left: 27rpx;
			}
			.three_icons{
				
				width: 95rpx;
				display: flex;
				flex-wrap: wrap;
				height: 65rpx;
				font-size: 20rpx;
				color: #999;
				view{
					width: 100%;
					text-align: center;
				}
			}
			.anniu{
				display: flex;
				width: 400rpx;
				height: 70rpx;
				.add_car{
					width: 200rpx;
					height: 70rpx;
					line-height: 70rpx;
					background-image: linear-gradient(0deg, 
						#ff8b02 0%, 
						#f9ad53 100%);
					border-radius: 34rpx 0rpx 0rpx 36rpx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}
				.buy{
					width: 201rpx;
					height: 70rpx;
					line-height: 70rpx;
					background-image: linear-gradient(0deg, 
						#ff5910 0%, 
						#fa7e48 100%);
					border-radius: 0rpx 36rpx 34rpx 0rpx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}
			}
			
		}
		
	}
	
	
</style>

<template>
	<view class="zl-box">
		<view class="gold-ratio-box">
			<view class="title">钻石倍率:</view>
			<input class="input" type="digit" v-model="diamond_ratio" @input="chack"/>
			<view class="title">戒托倍率:</view>
			<input class="input" type="digit" v-model="ring_ratio" @input="chack"/>
		</view>
		<view class="explain">
			<view class="explain-title">{{explainTitle}}</view>
			<view>
				<view>
					{{explain01}} 
				</view>
				<view>
					{{explain02}}
				</view>
				<view>
					{{explain03}}
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipShopGoldPrice">{{btnName}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				diamond_ratio:'',
				ring_ratio: '',
				explainTitle:'说明',
				explain01:'1、倍率设置：请设置您的商城3d售价倍率(钻石倍率和戒托倍率)；',
				explain02:'2、个人商城售价=app钻石价格*钻石倍率 + app戒托价格*戒托倍率;',
				explain03:'3、修改的倍率仅用于您的个人商城；',
				btnName:'保存'
			}
		},
		onLoad(op) {
			this.getRatio()
		},
		methods: {
			getRatio(){
				this.$api.get('3d/getRatio').then(res => {
					if(res.status == 1){
						this.diamond_ratio = res.data.diamond_ratio
						this.ring_ratio = res.data.ring_ratio
					}
				})
			},
			skipShopGoldPrice(){
				this.$api.post('3d/setRatio', {
					diamond_ratio:this.diamond_ratio,
					ring_ratio:this.ring_ratio,
				}).then(res => {
					if(res.status == 1){
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
					}
				})
			},
			chack(e){
				//重新赋值给input
				this.$nextTick(() => {
					const val = e.target.value.replace(/[^\d\.]/g,'');
					this.value= val + ''
				})
			},
			//返回
			goto_top(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.zl-box{
		padding: 30upx;
		// border-top: solid 2upx #f6f6f6;
		.gold-ratio-box{
			margin-bottom: 30upx;
			.title{
				font-size: 30upx;
				font-weight: bold;
				margin-bottom: 20upx;
			}
			.input{
				width: 100%;
				height: 78upx;
				text-align: center;
				font-size: 32upx;
				font-weight: bold;
				background-color: #F6F6F6;
				border-radius: 6upx;
			}
		}
	}
	.explain {
		font-size: 22upx;
		color: #999999;
		display: flex;
	
		.explain-title {
			width: 12%;
		}
	}
	.bottom-btn {
		width: 100%;
		margin-top: 160upx;
	
		.btn {
			height: 78upx;
			line-height: 78upx;
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
</style>

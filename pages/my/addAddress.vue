<template>
	<view class="content">
		<view class="p2">
			<view class="item" url="./applyRefund">
				<text>收件人</text>
				<view class="right">
					<input type="text" v-model="editForm.username" placeholder="请输入收件人姓名" />
				</view>
			</view>
			<view class="item ">
				<text>联系电话</text>
				<view class="right">
					<input type="text" v-model="editForm.mobile" placeholder="请输入联系电话" maxlength="11"/>
				</view>
			</view>
			<view class="item ">
				<text>地区</text>
				<view class="right" >
					<input type="text" v-model="regions" placeholder="请选择" :disabled="true" @click="show = true"/>
				</view>
				<u-picker v-model="show" mode="region" @confirm="yes_addres"></u-picker>
			</view>
			<view class="item ">
				<text>详细地址</text>
				<view class="right">
					<input type="text" v-model="editForm.address"  placeholder="请填写详细地址" />
				</view>
			</view>
			<view class="item item-bd" v-if="address_id == 0 ? true : false">
				<text>设置默认地址</text>
				<view class="right">
					<switch :checked="address_mor==1?true:false" style="transform:scale(0.9)" @change="Change" color="#1e2f64" />
				</view>
			</view>
		</view>
		<view v-if="address_id == 0">
			<button class="btn_sty" v-if="this.editForm.username =='' || this.editForm.mobile == '' || this.editForm.address == '' || this.regions == ''" >保存</button>
			<button class="btn" v-else @click="save">保存</button>
		</view>
		<button class="btn" v-else @click="Modify">修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				pcd: 'fdsdsaf',
				detail:"",
				detail1:"",
				detail2:"",
				editForm:{
					username: '',
					mobile: '',
					address: ''
				},
				regions:'',
				province:'',//省
				city:'',//市
				area:'',//区
				address_type:0,
				address_id:0,
				address_mor:0,
			}
		},
		onLoad(op) {
			
			console.log(op)
			if(op.type != -1 ){
				this.address_id = op.type
				this.$api.get('address/'+op.type).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.editForm.username = res.data.contact
						this.editForm.mobile = res.data.mobile
						this.regions = res.data.province+'-'+ res.data.city +'-'+res.data.area
						this.editForm.address = res.data.address
					}
				})
			}
			
		},
		methods:{
			//地区
			yes_addres(e){
				this.province = e.province.label
				this.city = e.city.label
				this.area = e.area.label
				this.regions = this.province+'-'+this.city+'-'+this.area
			},
			// 监听switch开关状态变化
			Change(e){
				console.log(e.detail.value)
				if(e.detail.value == true){
					this.address_type = 1
					// console.log(this.address_type)
				}else{
					this.address_type = 0
					// console.log(this.address_type)
				}
			},
			//保存
			save(){
				
				if(!(/^1[345678]\d{9}$/.test(this.editForm.mobile))){
					uni.showToast({
						title:'手机号不正确',icon:'none'
					})
				}else{
					this.$api.post('address',{address_id:this.address_id,contact:this.editForm.username,mobile:this.editForm.mobile,province:this.province,
					city:this.city,area:this.area,address:this.editForm.address,is_default:this.address_type}).then(res=>{
						console.log(res)
						if(res.status ==1){	
							uni.navigateBack()
						}
					})
				}
			},
			//修改
			Modify(){
				if(!(/^1[34578]\d{9}$/.test(this.editForm.mobile))){
					uni.showToast({
						title:'手机号不正确',icon:'none'
					})
				 }else{
					 this.$api.post('address',{address_id:this.address_id,contact:this.editForm.username,mobile:this.editForm.mobile,province:this.province,
					city:this.city,area:this.area,address:this.editForm.address,is_default:0,address_id:this.address_id}).then(res=>{
						console.log(res)
						if(res.status ==1){	
							uni.navigateBack()
						}
					})
				}
			}
		}
	}
</script>
<style>
	page{
		background-color: #f6f6f6;
	}
</style>
<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.content {
		.p2{
			background-color: #fff;
			border-radius: 20rpx;
			padding: 0 30rpx;
			width: 700rpx;
			margin: 15rpx auto;
			.item{
				display: flex;
				justify-content: space-between;
				height: 88rpx;
				line-height: 88rpx;
				border-bottom: 2rpx solid #eee;
				.right{
					display: flex;
					align-items: center;
					display: flex;
					input{
						font-size: 26rpx;
					}
					.pickerBox{
						font-size: 26rpx;
						color: #999;
						display: flex;
						height: 88rpx;
						line-height: 88rpx;
						text{
							height: 88rpx;
							line-height: 88rpx;
							white-space:nowrap;
							text-overflow:ellipsis;
							overflow:hidden;
							font-size: 22rpx;
							color: #000000;
						}
					}
				}
			}
			.item-bd{
				border-bottom: none;
			}
		}
		.btn{
			position: fixed;
			left: 30rpx;
			bottom: 65rpx;
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #1e2f64;
			color: #fff;
			border-radius: 60rpx;
		}
		.btn_sty{
			position: fixed;
			left: 30rpx;
			bottom: 65rpx;
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #999;
			color: #fff;
			border-radius: 60rpx;
		}
	}
</style>

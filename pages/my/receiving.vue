<template>
	<!-- 我的地址 -->
	<view class="content">

		<view class="conent_box" v-if="!list_show">
			<u-swipe-action v-for="(it, index) in page_list" :key="it.id" :show="it.show" :index="index"
				class="address_box" @click="del(it.id)" @open="open" :options="options">
				<view class="address_box_child">
					<view class="child_l" @click="add_pay(it,index)">
						<view>{{it.contact}} {{it.mobile}}
							<text class="more" v-if="it.is_default == 1">默认</text>
							<text class="more1" v-if="it.id_number">实名</text>
						</view>
						<view class="text">{{it.province+it.city+it.area+it.address}}</view>
					</view>
					<view class="item">
						<!-- <radio-group>
							<radio :checked="it.is_default == 1" @click="radioChange(it.id)" color="#c13535">
								设置为默认地址
							</radio>
						</radio-group> -->
						<view class="btns" @click="Add(it,1)">
							<view class="btns_icon">
								<u-icon name="edit-pen" size="50rpx"></u-icon>
							</view>
							<text>编辑</text>
						</view>
					</view>
				</view>
			</u-swipe-action>
		</view>
		<view style="padding-top: 150rpx;" v-else>
			<u-empty text="没有收货地址" mode="address"></u-empty>
		</view>
		<button class="btn" @click="Add1()">添加地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '设置为默认地址',
				page_list: [],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				list_show: true,
				is_mine: 1, //0-不是自己的 1-自己的
				type: 0,
				current: 0,
			}
		},
		onShow() {
			this.page_t()
		},
		onLoad(op) {
			console.log(op)
			this.is_mine = op.is_mine
			this.type = op.type
			this.current = op.current
		},
		methods: {
			//从下单页来
			add_pay(e,i) {
				console.log(e)
				if (this.type == 0) {
					if (this.current == 0 || this.current == 3) {
						if(this.is_mine == 1){
							uni.setStorageSync('address', e)
							uni.navigateBack()
						}
					}
					if (this.current == 1) {
						if(this.is_mine == 1){
							let v = this.page_list[i].id_number
							let vv = this.page_list[i].truename
							if(v == '' || vv == ''){
								this.com.msg('请您先实名认证~')
								let _that = this
								setTimeout(function() {
									_that.Add(e,2)
								}, 1500)
							} else {
								uni.setStorageSync('address_send',e)
								uni.navigateBack()
							}
						} else{
							uni.setStorageSync('address_bier',e)
							uni.navigateBack()
						}
					}
				}
			},
			// 打开一个的时候，关闭其他
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				})
			},

			page_t() {
				this.$api.get('address', {
					is_mine: this.is_mine
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.page_list = res.data
						console.log(this.page_list)
					}
					if (res.data === undefined || res.data == "") {
						this.list_show = true
					} else {
						this.list_show = false
					}
				})
			},
			// 选中某个单选框时，由radio时触发  设置默认地址
			// radioChange(e) {
			// 	this.$api.put('address',{address_id:e}).then(res=>{
			// 		console.log(res)
			// 		if(res.status == 1){
			// 			this.page_t()
			// 		}
			// 	})

			// },

			// 编辑地址
			Add(e,a) {
				if(a == 1){
					this.com.navto('./addAddress?type=' + JSON.stringify(e) + '&is_mine=' + this.is_mine + '&onShow=0')
				}
				if(a == 2){
					this.com.navto('./addAddress?type=' + JSON.stringify(e) + '&is_mine=' + this.is_mine + '&onShow=1')
				}
				
			},
			// 添加新地址
			Add1() {
				this.com.navto('../my/addAddress?is_mine=' + this.is_mine + '&onShow=0')
			},
			// 删除地址
			del(e) {
				let that = this
				let arr = {
					id: e
				}
				uni.showModal({
					content: "确定删除这个地址吗？",
					success: function(re) {
						if (re.confirm) {
							that.$api.del('address', arr).then(res => {
								console.log(res)
								if (res.status == 1) {
									that.com.msg(res.message)
									that.page_t()
								}
							})
						}
					}
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #f6f6f6;
	}
</style>
<style lang="scss" scoped>
	.content {
		.conent_box {
			width: 100%;

			.address_box {
				padding: 0 20rpx;
				margin-top: 4rpx;
				background-color: #fff;

				.address_box_child {
					display: flex;
					justify-content: space-between;

					.child_l {
						width: 70%;
						line-height: 56rpx;
						padding: 30rpx 0;
						color: #999;

						view:nth-child(1) {
							font-size: 28rpx;
						}

						.text {
							font-size: 26rpx;
						}

						.more {
							background-color: #007AFF;
							line-height: 40upx;
							color: white;
							font-size: 24rpx;
							display: inline-block;
							padding: 0 20rpx;
							border-radius: 50rpx;
							margin-left: 20rpx;
						}
						.more1 {
							background-color: #007AFF;
							line-height: 40upx;
							color: white;
							font-size: 24rpx;
							display: inline-block;
							padding: 0 20rpx;
							border-radius: 50rpx;
							margin-left: 20rpx;
						}
					}
				}

				.item {
					margin-top: 40rpx;

					.btns {
						color: #999;
						text-align: center;
						border-left: 2rpx solid #eee;
						padding-right: 20rpx;

						text {
							display: inline-block;
							width: 110rpx;
							height: 48rpx;
							line-height: 45rpx;
							text-align: center;
							font-size: 24rpx;
						}
					}
				}
			}
		}

		.btn {
			font-size: 30rpx;
			position: fixed;
			left: 30rpx;
			bottom: 65rpx;
			width: 690rpx;
			height: 80rpx;
			line-height: 74rpx;
			color: #1e2f64;

			border-radius: 40rpx;
			border: 2rpx solid #1e2f64;

			text-align: center;

		}
	}
</style>

<template>
	<view>
		<zs-hx-navbar :config="config" @searchClick="searchClick"></zs-hx-navbar>
		<view class="textrus">
			<scroll-view class="scroll" scroll-x>
				<view class="scroll_child" v-for="(it,ind) in nav" :key="ind" :class="{active:it.id == currend}"
					@click="nav_cli(it.id)">
					<view class="">
						{{it.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="contes">
			<zs-shoplist-type :shop_list="shop_list" :lists="lists" :lv="lv" :page_login="page_login"
				:shop_label_texture_id="currend" :shaix_type="'3'" @shop_confim="shop_confim"></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {
					backgroundColor: [1,'#293C79'],
					color: '#ffffff',
					search: {
						value: '',
						placeholder: '',
						disabled: true,
						bgColor: '#ffffff'
					},
				},
				nav: [],
				currend: 0,
				shop_list: [],
				lists: [],
				page_login: true,
				lv: 0,
			}
		},
		onLoad(op) {
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			// console.log(op)
			this.nav = JSON.parse(op.data)
			this.currend = op.id
			this.nav_cli(op.id)
		},
		methods: {
			searchClick() {
				this.com.navto('./search')
			},
			//传值
			shop_confim(e) {
				this.$api.post('goods', e).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})
			},
			//点击
			nav_cli(e) {
				this.page_login = false
				this.currend = e
				this.$api.post('goods', {
					shop_label_texture_id: e
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
						this.page_login = true
					}
				})
				this.$api.get('screen', {
					type: 2
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.lists = res.data
					}
				})
			},
			//上一页
			gototop() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.header {
		width: 100%;
		padding: 0 20upx;
		display: flex;
		align-items: center;
		background-color: #293C79;

		.icon {
			margin-right: 20upx;
		}

		.input-view {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex: 1;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			margin: 7px 0;
			line-height: 60rpx;
			background-color: #eee;

			input {
				margin-top: 10rpx;
				font-size: 30rpx;

			}
		}
	}

	.textrus {
		width: 100%;
	}

	.contes {
		width: 100%;
		margin-top: 10upx;
		background-color: #F6F6F6;
	}

	.scroll {
		display: flex;
		white-space: nowrap;
		background-color: #fff;
		line-height: 88rpx;
		font-size: 30rpx;

		.scroll_child {
			width: 18%;
			display: inline-block;
			text-align: center;
			position: relative;

			&.active {
				color: #2d407a;

				&:before {
					content: '';
					position: absolute;
					left: 30%;
					bottom: 8%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 40%;
					background-color: #2d407a;
					// border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}
</style>

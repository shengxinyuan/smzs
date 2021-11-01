<template>
	<view>
		<view class="head">
			<image :src="selected_image" mode=""></image>
		</view>
		<view class="fixeds" id="evaluate">
			<scroll-view class="swiper" scroll-x>
				<view class="swiper_item" v-if="it.title != '定制专区'" v-for="(it,ind) in nav" :key="ind"
					@click="nav_cli(it.id)" :class="{active:nav_idnex == it.id}">
					{{it.title}}
				</view>
			</scroll-view>
		</view>
		<view class="">
			<zs-shoplist-type :shop_list="shop_list" :lists="lists" @shop_confim="shop_confim" :cate_fist_id="''"
				:shop_subject_id="nav_idnex" :lv="lv" :screen_label_list="label_list"></zs-shoplist-type>
				<view class=""
				style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
				v-if="shop_list.length > 0">
					{{ loadingText }}
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav_idnex: 0,
				nav: [],
				lists: [],
				shop_list: [],
				lv: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
				selected_image: '',
				label_list: {},
			};
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
			this.get_data(this.nav_idnex)
		},
		onLoad(op) {
			this.get_label_list()
			this.site_data()
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			console.log(op)
			this.nav = JSON.parse(op.type)
			this.nav_idnex = op.id
			this.nav_cli(op.id)
		},
		onPageScroll(e) {
			// console.log(e)
		},
		methods: {
			get_label_list(){
				this.$api.get('screen_label').then(res=>{
					if(res.status == 1){
						this.label_list = res.data
					}
				})
			},
			shop_confim(e) {
				this.$api.post('goods', e).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})
			},

			nav_cli(e) {
				this.nav_idnex = e
				this.get_data(e)
			},
			get_data(e){
				this.$api.post('goods', {
					shop_subject_id: e,
					page: this.current_page
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						// this.shop_list1 = []
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.page_login = true
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list = this.shop_list.concat(res.data.data) 
							console.log(this.shop_list)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
					}
				})
			},
			site_data(){
				this.$api.get('site').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.selected_image = res.message.selected_image
					}
				})
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
	.head {
		width: 100%;
		height: 370rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.fixeds {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		z-index: 20;

		.swiper {
			display: flex;
			white-space: nowrap;

			.swiper_item {
				display: inline-block;
				width: 28%;
				text-align: center;
				position: relative;

				&.active {
					font-weight: bold;
					color: #2d407a;

					// background: #f8f8f8;
					&:before {
						content: '';
						position: absolute;
						left: 40%;
						top: 88%;
						transform: translateY(-50%);
						height: 6rpx;
						width: 20%;
						background-color: #2d407a;
						opacity: .8;

					}
				}
			}
		}

	}
</style>

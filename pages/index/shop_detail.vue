<template>
	<view class="container">
		<zs-hx-navbar ref="hxnb" :config="config" @clickBtn="onClickBtn">
			<block slot="center" v-if="isShow">
				<view class="center" style="">
					<view class="center_it" 
					:class="{active:head_ind == ind}" 
					v-for="(it,ind) in headlist" :key="ind"
						@click="head_nav_cli(ind)">
						{{it.name}}
					</view>
				</view>
			</block>
		</zs-hx-navbar>
		<!-- banner轮播 -->
		<view class="carousel">
			<!-- 视频播放 -->
			<template v-if="videoShow">
				<swiper :duration="400" :interval="3000" @transition="transition">
					<swiper-item class="swiper-item">
						<view class="video-wrapper">
							 <video id="myVideo" 
							 :src="shop_det.video" 
							 :autoplay="true" 
							 loop 
							 :enable-progress-gesture="false" 
							 :show-fullscreen-btn="false"
							 @pause="stop_video" 
							 @ended="end_video"></video>
							 
						</view>
					</swiper-item> 
				</swiper>
			</template>
			<template v-else>
				<swiper :circular="true" :autoplay="sw_autoplay" :duration="400" :interval="3000"
					@change="swiperChange">
					<swiper-item class="swiper-item" v-for="(item,index) in shop_det.album" :key="index"
						@click="banner_cli(index)">
						<template v-if="!videoShow">
							<view class="image-wrapper">
								<image :src="item.img0" class="loaded" mode="aspectFill"></image>
							</view>
							<image v-if="shop_det.video && index == 0" class="bofang" src="https://zuanshi.semoh.cn/applet_static/bofang.png" mode="" />
						</template>
					</swiper-item>
				</swiper>
			</template>
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num" v-if="shop_det.album">{{shop_det.album.length}}</text>
			</view>
		</view>
		<!-- 横条 -->
		<!-- <view class="trabecula" v-if="!vip_type">
			市场平均料价：{{shop_det.average_price}}元/g <text style="margin-left: 20rpx;"> 工费：{{shop_det.wage}}元/g</text>
		</view> -->
		<view class="introduce-section">
			<view class="price-box">
				<view class="price-box_l" v-if="!vip_type">
					<text class="price-tip">¥</text>
					<text class="price">{{shop_det.price}}</text>
					<text class="m-price-tip">¥</text>
					<text class="m-price">{{shop_det.price_vip}}</text>
					<image src="https://zuanshi.semoh.cn/applet_static/index/pf.png" mode="aspectFill"></image>
				</view>
				<view class="price-box_l" style="color: #e95069;" v-else>
					<text class="price-tip">¥</text>
					<text class="price">{{shop_det.price_vip}}</text>
				</view>
				<view class="price-box_r">
					<view class="min-box">
						<view v-if="shop_det.T_F_collect" @click="like_collect(shop_det.id)">
							<u-icon class="s_icon" name="heart-fill" color="#DD524D" size="38"></u-icon>
							<view style="color: #DD524D;">已收藏</view>
						</view>
						<view v-else @click="like_collect(shop_det.id)">
							<u-icon class="s_icon" name="heart" size="38"></u-icon>
							<view>收藏</view>
						</view>
					</view>
					<!-- <view class="min-box" @click="onc_bj(shop_det.title)">
							<image src="https://zuanshi.semoh.cn/applet_static/index/search_icon.png" mode=""></image>
							<view>一键比价</view>
						</view> -->
					<!-- #ifdef APP-PLUS || H5-->
					<view class="min-box-tt" @click="skipShare" v-show="vip_type">
						<u-icon name="share" size="42"></u-icon>
						<view>分享</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="shopping_text">
			<view class="shop_names">
				<text class="zp">正品</text>
				<text class="shopname">{{shop_det.title}}</text>
			</view>
			<view class="shop_introduce">
				{{shop_det.remark}}
			</view>
		</view>
		<view class="text-item" v-if="!vip_type" @click="goto_page('../my/vip_member')">
			<view class="text-box">
				<view class="">
					<text>开通</text>
					<text style="font-weight: bold;">超级会员</text>
					<text>，预估额外省</text>
					<text style="color: #df3636;"> {{(shop_det.price - shop_det.price_vip).toFixed(2)}}元 </text>
				</view>
				<view class="text-item_r">
					<text style="margin-right: 10upx;">立即开通</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="text-des">
			<text>{{shop_det.remark}}</text>
		</view>
		<view class="Rapid_delivery">
			<image src="https://zuanshi.semoh.cn/applet_static/index/ji.png" mode="aspectFill"></image>
			<text style="margin-right: 16upx;">{{shop_det.letter}}</text>
		</view>
		<!-- 规格 -->
		<view class="specification">
			<view class="child" v-for="(it,ind) in stynumber">
				{{it.name}}：{{it.num}}
			</view>
		</view>
		<!-- 评价 -->
		<view class="eva-section evaluate" id="evaluate">
			<view class="section_title" @click="goto_page('./evaluate?id='+shop_id)" v-if="commentlist">
				<view class="tit_l">
					<text class="pk"></text>
					<text class="pj">宝贝评价</text>
					<text class="numbers">（{{commentlist.total}}）</text>
				</view>
				<view style="color: #999; font-size: 24upx;">
					查看更多
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="eva-box">
				<view class="eval_con" v-for="(it,ind) in commentlist.data">
					<view class="order_head">
						<view class="img">
							<image :src="it.avatar" mode="aspectFill"></image>
							<view class="shop_name">{{it.nickname}}</view>
						</view>
						<view class="shop_name_f">

						</view>
						<view class="order_time">{{it.create_time}}</view>
					</view>
					<view class="order_con">
						{{it.remark}}
					</view>
					<view class="order_img">
						<image v-for="img in it.img" :src="img" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>

		<view id="details_parse" class="detail-desc details_parse">
			<view class="d-header">
				<text>宝贝详情</text>
			</view>
			<u-parse :html="shop_det.content"></u-parse>
		</view>
		<!-- //推荐 -->
		<view id="tuijian" class="tuijian">
			<image style="width: 100%;height: 80rpx;margin-top: 20rpx;" src="https://zuanshi.semoh.cn/applet_static/my/tuijain_bgimg.png" mode="">
			</image>
			<view style="margin-bottom: 120rpx;">
				<zs-shopping-list :shop_list="shop_list" :lv="member.lv"></zs-shopping-list>
			</view>
		</view>

		<view class="add_bottom">
			<view class="add_con">
				<view class="three_icons" @click="skipIndex">
					<image src="https://zuanshi.semoh.cn/applet_static/index/index.png" mode="widthFix"></image>
					<view>首页</view>
				</view>
				<view class="three_icons" @click="goto_page('../service/service')">
					<image src="https://zuanshi.semoh.cn/applet_static/index/kf.png" mode="widthFix"></image>
					<view>客服</view>
				</view>
				<view class="three_icons" @click="goto_cart">
					<image src="https://zuanshi.semoh.cn/applet_static/index/cart.png" mode="widthFix"></image>
					<view>购物车</view>
				</view>
				<view class="anniu">
					<view class="add_car" @click="payment_yes(0)">加入购物车</view>
					<view class="buy" @click="payment_yes(1)">立即购买</view>
				</view>
			</view>
		</view>
		<!-- 规格-模态层弹窗 -->
		<u-popup v-model="skuShow" mode="bottom">
			<scroll-view scroll-y="true">
				<view class="attr-content" @click.stop="stopPrevent" style="height: 900rpx;position: relative;">
					<view class="" style="display: flex;justify-content: space-between;align-items: center;">
						<view v-for="(item,index) in shopsku.title" class="attr-list">
							<text style="font-weight: bold;">{{item.title.title}}</text>
							<view class="item-list">
								<text v-for="(childItem, childIndex) in item.data"
									v-if="childItem.pid === item.id && childItem.pid !=3" :key="childIndex" class="tit"
									:class="{selected: childItem.selected}"
									@click="selectSpec(index,childIndex, childItem.pid)">
									{{childItem.title}}
								</text>
								<!-- <text>asjdfh</text>
								<text>asjdfh</text>
								<text>asjdfh</text>
								<text>asjdfh</text>
								<text>asjdfh</text> -->
							</view>
						</view>
						<view class="" v-if="previewImage!=''">
							<image style="width: 160rpx;height: 160rpx;" 
								:src="previewImage" mode=""
								@click="perview"></image>
						</view>
					</view>
					
					<view v-for="(it, ind) in details" :key="ind" :class="{jactive:jg_ind == it.id}" class="jg_sty"
						@click="zhifu(it)">
						<view class="jg_sty_t">
							<view>
								条码：{{it.bar_code}}
							</view>
							<view>
								克重：{{(it.weight/1).toFixed(2)}}g
							</view>
						</view>
						<view class="jg_sty_b">
							<template v-if="vip_type">
								<view>
									工费：￥{{((it.vip_labor/1)/(it.weight/1)).toFixed(2)}}
									<text>/g</text>
								</view>
							</template>
							<template v-else>
								<view>
									工费：￥{{((it.normal_labor/1)/(it.weight/1)).toFixed(2)}}
									<text>/g</text>
								</view>
							</template>
							<view class="">库存：{{it.stock}}</view>
							<view class="jg_r" v-if="!vip_type">
								￥<text>{{it.price_normal}}</text>
							</view>
							<view class="jg_r" v-else>
								￥<text>{{it.price_vip}}</text>
							</view>
						</view>
						<view class="jg_sty_t" style="line-height: 40rpx;">
							<text style="width: 50%;">尺寸：{{it.ring_arm_size || '无'}}</text>
							<text style="width: 50%;">备注：{{it.remark || '无'}}</text>
						</view>
						<!-- <view style="line-height: 40rpx;">
							尺寸：{{it.ring_arm_size || '无'}}
						</view> -->
					</view>
					<view style="height: 180rpx;"></view>
					<view style="position: fixed;bottom: 0;left: 0;right: 0;padding: 0 20rpx;background-color: #FFFFFF;">
						<view style="margin: 20rpx 0;display: flex;align-items: center;justify-content: space-between;flex: 1;">
							<view style="font-weight: bold;">数量</view>
							<u-number-box v-model="value" :min="1" :max="stocks" :step="1" :long-press="false" @change="valChange">
							</u-number-box>
						</view>
						<button class="btn" @click="shop_pay(1)" v-if="shop_type == 1">立即购买</button>
						<button class="btn" @click="shop_pay(2)" v-else>加入购物车</button>
					</view>
				</view>
			</scroll-view>
		</u-popup>
		
		<view class="teturn_top" v-if="return_top" @click="head_nav_cli(0)">
			<u-icon name="arrow-upward"></u-icon>
		</view>
		<!-- 分享 -->
		<zs-share ref="share" @shaer_app="shaer_app" :contentHeight="400"></zs-share>
		<!-- 视频播放弹窗 -->
		<!-- <view class="video-popup" v-if="videoShow" @click="zanting" @touchmove.prevent>
			<view class="video">
				<video id="myVideo" :src="shop_det.video" :autoplay="true" loop show-play-btn controls
					objectFit="cover" @pause="ZhanTing" @ended="ZhanTing"></video>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				config: {
					centerSlot: true,
					barPlaceholder: false,
					//背景颜色;参数一：透明度（0-1）;参数二：背景颜色（array则为线性渐变，string为单色背景）
					backgroundColor: [0, '#ffffff'],
					// 滑动屏幕后切换颜色，注意颜色为数组时长度必须一样，还有使用滑动切换必须监听 onPageScroll 事件
					slideBackgroundColor: [1, '#ffffff'],
					rightButton: [{
						key: 'btn1',
						icon: '&#xe6eb;',
						position: 'left'
					}],
				},
				value: 1,
				shop_num: 1,
				vip_type: false, //会员状态
				shop_type: 0, //按钮状态
				jg_ind: '', //sku套装id
				bgcolor: '', //背景色
				opacity: 0, //透明度
				head_ind: 0, //头部样式
				specClass: 'none',
				specSelected: [],
				swiperCurrent: 0,
				favorite: true,
				shareList: [],
				imgList: [],
				headlist: [{
						name: '商品'
					},
					{
						name: '评价'
					},
					{
						name: '详情'
					},
					{
						name: '推荐'
					}
				],
				pingl: 0, //评论
				tuij: 0, //推荐
				detail_shop: 0, //商品详情
				shop_id: 0,
				shop_det: '', //商品信息
				stynumber: [], //款号等
				shop_list: '', //推荐
				member: '', //个人信息
				shopsku: '',
				shoptype_id: "", //商品id
				sku_ids: '', //sku 的id拼接
				details: '',
				commentlist: '',
				autoplay: false,
				return_top: false,
				videoShow: false,
				stock: 0,
				skuShow: false,
				stocks: 1,
				isLogin: false,
				sw_autoplay: true,
				previewImage:''
			};
		},
		onPageScroll(e) {
			// 重点，用到滑动切换必须加上
			this.$refs.hxnb.pageScroll(e);
			// console.log(e)
			if (e.scrollTop > 50) {
				this.isShow = true
			} else {
				this.isShow = false
			}
			// this.opacity = e.scrollTop / 180 //头部渐入渐出
			if (e.scrollTop >= this.pingl && e.scrollTop < this.detail_shop) { //评价
				this.head_ind = 1
			} else if (e.scrollTop >= this.detail_shop && e.scrollTop < this.tuij) { //详情
				this.head_ind = 2
			} else if (e.scrollTop >= this.tuij) { // 推荐
				this.head_ind = 3
			} else if (e.scrollTop == 0) { //商品
				this.head_ind = 0
			}
		},
		onLoad(options) {
			let a = uni.getStorageSync("token")
			// console.log(a)
			if (!a) {
				this.isLogin = false
			} else {
				this.isLogin = true
			}
			console.log(options)
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			this.shop_id = options.shop_id;
			this.member = uni.getStorageSync('member_info')
			// console.log(this.member)
			let vip = uni.getStorageSync('viptype')
			// console.log(vip)
			// 会员
			if (vip) {
				this.vip_type = true
			} else {
				this.vip_type = false
			}
			this.page_render()
		},
		onShow() {
			
		},
		// onReady: function(res) {
		// 	// #ifndef MP-ALIPAY
		// 	this.videoContext = uni.createVideoContext('myVideo')
		// 	// #endif
		// },
		methods: {
			// 顶部导航按钮点击事件
			onClickBtn(data) {
				// console.log(data)
				// uni.showToast({
				// 	title: `key为 ${data.key} 的按钮`,
				// 	icon: 'none',
				// 	duration: 1300
				// });
				if(data.key == 'btn1'){
					this.share()
				};
			},
			//    视频暂停
			stop_video() {
				this.videoShow = false
				this.sw_autoplay = true
			},
			end_video() {
				this.videoShow = false
				this.sw_autoplay = true
			},
			//一键比价
			onc_bj(e) {
				// uni.navigateTo({
				// 	url:'./taobao?url='+e
				// })
				plus.runtime.openURL("https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=" +
					e);
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
				this.shop_num = e.value
			},
			page_render() {
				let mid = this.member.id || 0
				this.$api.get('goods/' + this.shop_id + '&member_id=' + mid).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.shop_det = res.data
						console.log(this.shop_det)
						this.shoptype_id = res.data.id
						this.stynumber = [{
								name: '款号',
								num: res.data.model_no
							},
							{
								name: '库存',
								num: res.data.stock
							},
							{
								name: '成色',
								num: res.data.texture
							},
							{
								name: '销量',
								num: res.data.sale,
							},
						]
						// console.log(...this.stynumber);
						// sku
						this.sku()
						// this.scrolls()
						// 推荐
						// uni.createSelectorQuery().select('.tuijian').boundingClientRect((resb) => {
						// 	console.log(resb)
						// 	this.tuij = resb.top - 50
						// 	// 详情
						// }).exec()
					}
				})
				//推荐商品
				this.$api.post('goods', {
					is_recommend: 1
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})
				//评论
				this.$api.get('commentlist/' + this.shop_id).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.commentlist = res.data
					}
				})
			},
			//收藏
			like_collect(e) {
				this.$api.put('collect', {
					id: e
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.page_render()
					}
				})
			},
			//购买/加购物车
			shop_pay(e) { //e  1是购买 2 加购物车
				if (!this.isLogin) {
					this.skuShow = false
					uni.showModal({
						content: '您还未登录,是否登录?',
						success: res => {
							if (res.confirm) {
								this.com.rel('/pages/login/login')
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return
				}				
				let data = {
					goods_id: this.shop_id,
					sku_id: this.jg_ind,
					count: this.shop_num,
					type: 0
				}
				if (this.jg_ind == '') {
					this.com.msg('请选择规格')
					return
				} else if(this.shop_num > this.stock){
					this.com.msg('库存不足~')
					return
				} else {
					this.toggleSpec() // 模态框
					if (e == 1) {
						this.skuShow = false
						this.com.navto('../vip-confirm-order/vip-confirm-order?data=' + JSON.stringify(data))
					} else {
						this.$api.post('cart', {
							shop_goods_id: this.shop_id,
							count: this.shop_num,
							shop_goods_sku_id: this.jg_ind
						}).then(res => {
							// console.log(res)
							this.com.msg(res.message)
							this.skuShow = false
						})
					}
				}
			},
			//结果
			zhifu(e) {
				console.log(e);
				this.previewImage = e.image 
				this.value = 1
				this.jg_ind = e.id
				this.stock = e.stock
				this.stocks = e.stock
				console.log(this.stocks)
			},
			//购物车
			goto_cart() {
				uni.redirectTo({
					url: '../cart/cart'
				})
			},
			goto_page(e) {
				this.com.navto(e)
			},
			skipIndex() {
				uni.redirectTo({
					url: './index'
				})
			},
			//点击头部
			head_nav_cli(e) {
				this.head_ind = e
				let that = this
				if (e == 0) {
					uni.pageScrollTo({
						scrollTop: 160,
						duration: 0,
						success(a) {
							this.head_ind = 0
						}
					});
				} else if (e == 1) {
					uni.pageScrollTo({
						scrollTop: that.pingl,
						duration: 0,
						success(a) {
							this.head_ind = 1
						}
					});

				} else if (e == 2) {
					uni.pageScrollTo({
						scrollTop: that.detail_shop,
						duration: 0,
						success(a) {
							this.head_ind = 2
						}
					})
				} else if (e == 3) {
					console.log(e)
					uni.pageScrollTo({
						scrollTop: that.tuij,
						duration: 200,
						success(a) {
							this.head_ind = 3
						}
					});
				}
			},
			//轮播指示点
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			transition(e){
				// console.log(e.detail.dx)
				this.videoShow = false
				this.sw_autoplay = true
			},
			//点击轮播图放大
			banner_cli(e) {
				//判断有没有视频
				if (this.shop_det.video) {
					if (e == 0) { //点第一张
						this.videoShow = true
						this.sw_autoplay = false
						// this.autoplay = true
						// this.videoContext.play()
						// if (this.autoplay == false) {

						// }
					} else {
						let arr = [];
						this.shop_det.album.forEach((i, index) => {
							if (index != 0) {
								arr.push(i.img0)
							}
						})
						uni.previewImage({
							urls: arr,
							loop: true
						});
					}
				} else { //没有视频图片加第一张
					let arr = [];
					this.shop_det.album.forEach((i, index) => {
						arr.push(i.img0)
					})
					uni.previewImage({
						urls: arr,
						loop: true
					});
				}

			},
			// 图片预览
			perview(){
				let arr = []
				this.details.forEach((item,index) =>{
					arr.push(item.image)
					// arr.push('https://cdn.uviewui.com/uview/swiper/swiper3.png')
				})
				uni.previewImage({
					current:this.previewImage,
					urls: arr,
					loop: true
				});
			},
			//加购物车/购买
			payment_yes(e) {
				this.skuShow = true
				this.shop_type = e //按钮显示
				// this.toggleSpec() // 模态框
				this.sku()
			},
			//商品sku
			sku() {
				this.$api.get('sku', {
					type: 0,
					id: this.shoptype_id
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.shopsku = res.data
						this.details = res.data.data
						console.log(this.details)
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
					}
				})
			},
			//返回上一页
			goto_top() {
				uni.navigateBack()
			},
			//规格弹窗开关
			toggleSpec() {
				// if (this.specClass === 'show') {
				// 	this.specClass = 'hide';
				// 	setTimeout(() => {
				// 		this.specClass = 'none';
				// 	}, 2500);
				// } else if (this.specClass === 'none') {
				// 	this.specClass = 'show';
				// }
			},
			//选择规格
			selectSpec(find, index, pid) {
				let list = this.shopsku.title[find];
				// console.log(list)
				list.data.forEach(item => {
					if (item.pid === pid) {
						this.$set(item, 'selected', false);
					}
				})
				this.$set(list.data[index], 'selected', true);
				// 存储已选择
				// *
				//  * 修复选择规格存储错误
				//  * 将这几行代码替换即可
				//  * 选择的规格存放在specSelected中
				this.specSelected = '';
				this.shopsku.title.forEach(item => {
					item.data.forEach(c => {
						if (c.selected == true) {
							this.specSelected += c.id + ','
							// console.log(this.specSelected)
							//处理逗号
							let arr = ''
							this.sku_ids = this.specSelected.substr(0, this.specSelected.length - 1)
							arr = this.sku_ids.replace(/\,/g, "") //替换所有的 逗号
							// console.log(this.sku_ids)
							//判断长度相同时
							if (item.data.length == arr.length) {
								this.$api.get('sku', {
									type: 0,
									id: this.shoptype_id,
									sku_ids: this.sku_ids
								}).then(res => {
									console.log(res)
									if (res.status == 1) {
										this.details = res.data.data
									}
								})
							}
						}
					})
				})
			},
			//分享
			share() {
				this.$refs.share.toggleMask();
			},
			shaer_app(e) {
				console.log(e)
				console.log(this.shop_det)
				console.log(this.shop_id)
				let data = {
					id: this.shop_id, //首页传空
					type: 1, //type 1 商品 0 首页
					name: this.member.id //用户member_id
				}
				// console.log(JSON.stringify(data),JSON.stringify(data).length)
				if (e == 1) { // 微信好友
					// #ifdef MP-WEIXIN
					this.wxShare();
					// #endif
					console.log('https://zuanshi.semoh.cn/smsj/index.html#/pages/index/share_shop_detail?shop_id='+this.shop_id)
					// #ifdef APP
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: 'https://zuanshi.semoh.cn/smsj/index.html#/pages/index/share_shop_detail?shop_id='+this.shop_id,
						title: this.shop_det.title,
						summary: this.shop_det.remark,
						imageUrl: this.shop_det.image,
						success: function(res) {
							// console.log(res)
					
						},
						fail: function(err) {
							// console.log(err)
							// that.com.msg('失败')
						}
					});
					// #endif
				} else { //朋友圈
					// #ifdef MP-WEIXIN
					this.wxShare();
					// #endif
					// #ifdef APP
					uni.share({
						provider: "weixin",
						scene: "WXSenceTimeline",
						type: 0,
						href: 'https://zuanshi.semoh.cn/smsj/index.html#/pages/index/share_shop_detail?data=' +
							JSON.stringify(data),
						title: this.shop_det.title,
						summary: this.shop_det.remark,
						imageUrl: this.shop_det.image,
						success: function(res) {
							// console.log(res)
					
						},
						fail: function(err) {
							// console.log(err)
							// that.com.msg('失败')
						}
					});
					// #endif
				}
			},
			//收藏
			toFavorite() {
				this.favorite = !this.favorite;
			},
			buy() {
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent() {},
			skipShare() {
				uni.navigateTo({
					url: './mshare?data=' + JSON.stringify(this.shop_det)
				})
			}
		},
		mounted() {
			// let _that = this
			// uni.getSystemInfo({
			// 	success: (resu) => {
			// 		_that.height = resu.windowHeight - 80 + 'px'
			// 		const query = uni.createSelectorQuery()
			// 		// 详情
			// 		query.select('#details_parse').boundingClientRect()
			// 		query.selectViewport().scrollOffset()
			// 		query.exec(function(res1) {
			// 			debugger
			// 			res1[0].top // #the-id节点的上边界坐标
			// 			res1[1].scrollTop // 显示区域的竖直滚动位置
			// 			_that.height = resu.windowHeight - res1[0].top + 'px'
			// 			console.log('打印高度', res1[0].height);
			// 			console.log('打印demo的元素的信息', res1);
			// 			this.detail_shop = res1[1].scrollHeight
			// 		})
			// 		// 详情
			// 		query.select('#tuijian').boundingClientRect()
			// 		query.selectViewport().scrollOffset()
			// 		query.exec(function(res2) {
			// 			debugger
			// 			res2[0].top // #the-id节点的上边界坐标
			// 			res2[1].scrollTop // 显示区域的竖直滚动位置
			// 			_that.height = resu.windowHeight - res2[0].top + 'px'
			// 			console.log('打印高度', res2[0].height);
			// 			console.log('打印demo的元素的信息', res2);
			// 			this.tuij = res2[1].scrollHeight
			// 		})
			// 	},
			// 	fail: (resu) => {}
			// })
			var query = uni.createSelectorQuery()
			//获取对应模块到顶部的距离
			//评论
			query.select('#evaluate').boundingClientRect((res) => {
				console.log(res)
				this.pingl = res.top + 50
			}).exec()
			// 详情
			query.select('#details_parse').boundingClientRect((res) => {
				console.log(res)
				this.detail_shop = res.top + 50
			}).exec()
			// 推荐
			query.select('#tuijian').boundingClientRect((res) => {
				console.log(res)
				this.tuij = res.top + 50
			}).exec()
		},
	}
</script>

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="scss" scoped>
	.container{
		padding-bottom: 20rpx;
	}

	.center_tit {
		font-size: 32rpx;
		font-weight: bold;
	}

	.center {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.center_it {
			width: 25%;
			text-align: center;
			position: relative;

			&.active {
				color: #2d407a;

				&:before {
					content: '';
					position: absolute;
					left: 31%;
					bottom: 16%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 38%;
					background-color: #2d407a;
					border-radius: 4px;
					opacity: .8;
				}
			}
		}
	}

	.teturn_top {
		width: 90rpx;
		height: 90rpx;
		position: fixed;
		right: 3%;
		bottom: 130rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
		text-align: center;
		line-height: 90rpx;
		font-size: 40rpx;
		box-shadow: 1px 1px 3px #888888;
	}

	.header_bait {
		width: 100%;
		height: 160rpx;
		background-color: white;
		padding-top: 60rpx;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;

		.toubu {
			padding: 0 3%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.header {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 4%;
		position: absolute;
		left: 0;
		top: 60rpx;
		z-index: 20;

		.header_left {

			// text-align: center;
			// padding-top: 12rpx;
			// width: 80rpx;
			// height: 80rpx;
			// background-color: rgba(0, 0, 0, 0.5);
			// border-radius: 50%;
			// color: #fff;
			image {
				width: 64upx;
				height: 64upx;
			}
		}
	}

	.icon-you {
		/* font-size: $font-base + 2upx; */
		color: #888;
	}

	.carousel {
		height: 720upx;
		position: relative;
		.video-wrapper{
			width: 100%;
			height: 100%;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		video {
			width: 750rpx;
			height: 720rpx;
		}

		.swiper-dots {
			position: absolute;
			right: 30rpx;
			bottom: 20rpx;
			background-color: rgba(0, 0, 0, 0.5);
			display: inline-block;
			padding: 4rpx 18rpx 6rpx 18rpx;
			border-radius: 50rpx;
			color: #fff;
			font-size: 24upx;
		}

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
			position: relative;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			position: relative;

			.bofang {
				position: absolute;
				top: 46%;
				width: 76rpx;
				height: 76rpx
			}

			.loaded {
				width: 100%;
				height: 100%;
				// background: url(https://zuanshi.semoh.cn/applet_static/loading.gif) no-repeat center;
			}

		}


	}

	.trabecula {
		width: 100%;
		background-color: #1e2f65;
		height: 62rpx;
		color: #fff;
		line-height: 62rpx;
		padding: 0 3%;
		font-size: 26upx;
	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 30upx;
		margin-top: 10upx;

		.title {
			font-size: 32upx;
			/* color: $font-color-dark; */
		}

		.price-box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			// font-size: 26upx;

			/* color:$uni-color-primary; */
			.price-box_l {
				display: flex;
				align-items: center;

				image {
					width: 58upx;
					height: 24upx;
					margin-left: 16upx;
				}

				.m-price-tip {
					font-size: 22upx;
					color: #e95069;
					margin-left: 20upx;
				}
			}

			.price-box_r {
				text-align: center;
				display: flex;
				align-items: center;

				image {
					width: 38rpx;
					height: 38rpx;
				}

				view {
					font-size: 18rpx;
				}

				.min-box {
					margin-right: 20upx;
				}

			}
		}

		.price {
			font-size: 54rpx;
			font-weight: bold;
			margin: 0 10rpx;
		}

		.m-price {
			color: #e95069;
			font-size: 30upx;
			margin-left: 10upx;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;

			/* font-size: $font-sm; */
			/* color: $font-color-light; */
			text {
				flex: 1;
			}
		}
	}

	.shop_names {
		background-color: white;
		font-size: 30rpx;
		// padding: 0 3%;
		display: flex;
		align-items: center;

		.zp {
			font-size: 20rpx;
			background-image: linear-gradient(90deg,
					#ff4362 0%,
					#fd5538 100%);
			padding: 0 4rpx;
			color: white;
			border-radius: 6rpx;
		}

		.shopname {
			font-weight: bold;
			padding-left: 10upx;
		}
	}

	.shopping_text {
		background-color: #fff;
		padding: 0 0 20upx 3%;
		display: flex;

		.shop_introduce {}
	}

	.text-des {
		padding: 0 20upx 20upx 20upx;
		font-size: 24upx;
		background-color: #FFFFFF;
	}

	.Rapid_delivery {
		padding: 20upx;
		color: #999;
		font-size: 22upx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;

		image {
			width: 24upx;
			height: 24upx;
			margin-right: 16upx;
		}
	}

	.text-item {
		padding: 0 20rpx 20upx 20upx;
		color: #333;
		font-size: 24upx;
		background-color: #FFFFFF;

		.text-box {
			width: 100%;
			height: 70upx;
			padding: 0 30upx;
			background-color: #f6f8ff;
			border-radius: 8rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	// 规格
	.specification {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		font-size: 24rpx;
		margin: 10rpx 0;
		background-color: white;
		padding: 0 3%;
		line-height: 50rpx;
		color: #666;

		.child {
			width: 50%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		// .child:nth-child(2n+3) {
		// 	width: 40%;
		// 	white-space: nowrap;
		// 	overflow: hidden;
		// 	text-overflow: ellipsis;
		// }
	}

	/* 评价 */
	.eva-section {
		padding: 20upx 30upx;
		background: #fff;

		.section_title {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.tit_l {
				display: flex;
				align-items: center;

				.pk {
					display: inline-block;
					width: 12rpx;
					height: 100%;
					background-image: linear-gradient(#445589, #fff);
					margin-right: 16rpx;
				}

				.pj {
					font-size: 28upx;
				}

				.numbers {
					font-size: 22upx;
				}
			}
		}

		.eva-box {
			width: 100%;

			.eval_con {
				width: 100%;
				display: flex;
				background-color: white;
				padding: 2%;
				flex-wrap: wrap;
				border-bottom: 1rpx solid #f6f6f6;

				.order_head {
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;

					.img {
						display: flex;

						image {
							width: 80rpx;
							height: 80rpx;
							border-radius: 80rpx;
							background-color: #eee;
						}

						.shop_name {
							width: 180rpx;
							line-height: 80rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							font-size: 28rpx;
							margin-left: 20rpx;
							font-weight: bold;
						}
					}

					.order_time {
						width: 40%;
						line-height: 70rpx;
						text-align: right;
						font-size: 26rpx;
						color: #999;
					}
				}

				.order_con {
					width: 100%;
					font-size: 30rpx;
					line-height: 52rpx;
					padding: 6rpx 0;
				}

				.order_img {
					width: 100%;
					display: flex;

					image {
						width: 216rpx;
						height: 216rpx;
						margin: 10rpx;
						background-color: #eee;
					}
				}
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 10upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: 30upx;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-dark; */
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #f6f6f6;
			}
		}
	}

	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				/* font-size: $font-sm + 2upx; */
				/* color: $font-color-base; */
				line-height: 42upx;

				.price {
					/* font-size: $font-lg; */
					/* color: $uni-color-primary; */
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-base; */
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.jg_sty {
			font-size: 24rpx;
			padding: 20rpx;
			width: 100%;
			background-color: #f6f6f6;
			border-radius: 20rpx;
			margin: 10rpx 0;
			border: 1rpx solid #f6f6f6;

			&.jactive {
				color: #2d407a;
				background-color: #f6f8ff;
				border: 2upx solid #2d407a;
			}

			.jg_sty_t {
				display: flex;
				align-items: center;
				line-height: 40rpx;

				view {
					width: 50%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				view:nth-child(1) {
					// margin: 10rpx 0;
				}
			}

			.jg_sty_b {
				display: flex;
				line-height: 40rpx;
				justify-content: space-between;

				view {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.jg_r {
					color: #ef2d2d;

					text {
						font-size: 32rpx;
						font-weight: bold;
					}
				}
			}
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				font-size: 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 40upx;
				min-width: 60upx;
				height: 50upx;
				padding: 0 40upx;
				/* font-size: $font-base; */
				/* color: $font-color-dark; */
			}

			.selected {
				background: #f6f8ff;
				border: 2rpx solid #2d407a;
				color: #2d407a;
			}
		}
		.btn {
			height: 66upx;
			font-size: 30upx;
			line-height: 66upx;
			border-radius: 100upx;
			background: #273b76;
			/* font-size: $font-base + 2upx; */
			color: #fff;
			margin: 30upx auto 20upx;
		}
	}

	/* 购买 */
	.add_bottom {
		z-index: 99;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 130rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		border-top: 1rpx solid #e2e2e2;

		.add_con {
			width: 695rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.s_icon {
				margin-left: 27rpx;
			}

			.three_icons {
				width: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 20rpx;
				color: #333;

				view {
					width: 100%;
					text-align: center;
					margin-top: 10upx;
				}

				image {
					width: 36upx;
					height: auto;
				}
			}

			.anniu {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				width: 400rpx;

				.add_car {
					width: 45%;
					height: 62rpx;
					line-height: 62rpx;
					background-image: linear-gradient(90deg,
							#354a8b 0%,
							#1b2c60 100%);
					border-radius: 30upx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}

				.buy {
					width: 45%;
					height: 62rpx;
					line-height: 62rpx;
					background-image: linear-gradient(90deg,
							#f3c44f 0%,
							#f2b827 50%,
							#f0ab00 100%);
					border-radius: 30upx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
					margin-left: 10upx;
				}
			}
		}
	}

	.video-popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 999;

		.video {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			video {
				width: 100%;
				height: 500rpx;
			}
		}
	}
</style>

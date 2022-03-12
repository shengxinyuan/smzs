<template>
	<view>
		<view class="top-tips">
			提交发布时，需有更改内容
		</view>
		<view class="right-line">
			<u-button class="custom-btn-mr" size="mini" @click="saveDraft" v-if="canDraft">存草稿</u-button>
			<u-button class="custom-btn" type="primary" size="mini" @click="publish">发布</u-button>
		</view>
		<view class="form-wrap">
			<u-form :model="form" ref="uForm" label-width="140" label-align="left">
				<u-form-item label="商品名称" prop="title">
					<u-input v-model="form.title" placeholder="最多50字" />
				</u-form-item>
				<u-form-item label="商品图片" prop="image" label-position="top">
					<u-upload ref="uUploadImage" max-count="9" :file-list="previewList" :action="upload_url" :name="'file'"
						:auto-upload="true" :header="header"></u-upload>
				</u-form-item>
				<u-form-item label="价格" prop="price">
					<u-input v-model="form.price" type="number" placeholder="请输入含运费价格" />
				</u-form-item>
				<u-form-item label="库存" prop="stock">
					<u-input v-model="form.stock" type="number" placeholder="请输入库存" />
				</u-form-item>
				<u-form-item label="初始销量" prop="sale">
					<u-input v-model="form.sale" type="number" placeholder="请输入初始销量" />
				</u-form-item>
				
				<u-form-item label="类目" prop="cate">
					<u-input v-model="form.cate" type="select" @click="cateSelectShow = true" />
				</u-form-item>
				<text class="tips">类目需有自定义2级类目</text>
				<u-form-item label="详情介绍" prop="content" label-position="top">
					<u-input v-model="form.content" type="textarea" placeholder="请输入详情介绍" />
				</u-form-item>
				<u-form-item label="详情介绍图片" prop="album" label-position="top">
					<u-upload ref="uUploadAlbum" max-count="9" :file-list="previewListAlbum" :action="upload_url" :name="'file'"
						:auto-upload="true" :header="header"></u-upload>
				</u-form-item>
			</u-form>

			<u-select v-model="cateSelectShow" mode="mutil-column-auto" :list="list" @confirm="confirmCate"></u-select>
		</view>
	</view>
</template>

<script>
	import {
		commonUrl
	} from '../../api.js';
	export default {
		data() {
			return {
				previewList: [],
				previewListAlbum: [],
				// upload_url: 'https://zuanshi.semoh.cn/api/uploads',
				upload_url: `${commonUrl}common/upload_alioss`,
				header: {
					'token': uni.getStorageSync('token')
				},
				cateSelectShow: false,
				canDraft: true,

				form: {
					title: '',
					price: null,
					stock: null,
					sale: null,
					cate: '',
					content: '',
					cate_id: null,
					cate_second_id: null,
				},
				rules: {
					title: [
						{
							required: true,
							message: '请输入商品名称',
						},
						{
							max: 50,
							message: '最多输入50个字',
						}
					],
					price: [{
						required: true,
						message: '请输入价格',
					}],
					stock: [{
						required: true,
						message: '请输入库存',
					}],
					cate: [{
						required: true,
						message: '请选择类目',
					}],
					sale: [{
						required: true,
						message: '请输入初始销量',
					}],
				},
				list: [],
			}
		},
		methods: {
			confirmCate(e) {
				this.form.cate = `${e[0].label}-${e[1].label}`
				this.form.cate_id = e[0].value
				this.form.cate_second_id = e[1].value
			},
			queryData(id) {
				uni.showLoading({
					mask: true
				})
				this.$api.get('custom/queryGoodsDetail', {
					id
				}).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.previewList = res.data.image.split(',').map(url => ({
							url
						}))
						this.previewListAlbum = res.data.album.split(',').map(url => ({
							url
						}))
						this.form = {
							...this.form,
							...res.data
						}
						this.canDraft = res.data.status != '20' && res.data.status != '30';
						const first = this.list.find((l) => l.value == res.data.cate_id);
						const second = first && first.children.find((l) => l.value == res.data.cate_second_id);
						this.form.cate = `${
							first ? first.label : res.data.cate_id
						}-${
							second ? second.label : res.data.cate_second_id
						}`
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			checkAndGet() {
				return new Promise((resolve, reject) => {
					this.$refs.uForm.validate((pass) => {
						console.log(this.form)
						if (!pass) {
							reject()
						}
						const images = this.$refs.uUploadImage.lists.filter(val => {
							return val.progress == 100;
						}).map((val) => val.response ? val.response.data.url : val.url)
						if (!images || !images.length) {
							uni.showToast({
								icon: 'none',
								title: '请上传商品图片'
							})
							reject()
						}
						const album = this.$refs.uUploadAlbum.lists.filter(val => {
							return val.progress == 100;
						}).map((val) => val.response ? val.response.data.url : val.url)
						resolve({
							...this.form,
							album: album.join(','),
							image: images.join(',')
						})
					})
				})
			},
			save(data) {
				uni.showLoading({
					mask: true
				})
				this.$api.post('custom/save_draft', data).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						uni.navigateBack()
					} else {
						uni.showToast({
							icon: 'none',
							title: res.message || '保存失败，请重试'
						})
					}
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '保存失败，请重试'
					})
				})
			},
			saveDraft() {
				this.checkAndGet().then((res) => {
					this.save({
						...res,
						type: 1
					})
				})
			},
			publish() {
				this.checkAndGet().then((res) => {
					this.save({
						...res,
						type: 2
					})
				})
			},
			getAllCategory() {
				uni.showLoading({
					mask: true
				})
				return this.$api.get('category/getAllCategory', {
					custom_only: 1
				}).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						const fn = (item) => ({
							value: item.id,
							label: item.title,
							children: item.children && item.children.length
								? item.children.map(fn)
								: undefined
						})
						this.list = res.data
							.filter(item => item.children && item.children.length)
							.map(fn);
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad(e) {
			this.getAllCategory().then(() => {
				if (e.id) {
					this.queryData(e.id);
				}
			})
		},
	}
</script>

<style scoped>
	
	.right-line {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 12rpx 24rpx;
	}

	.custom-btn {
		margin: 0;
	}

	.custom-btn-mr {
		margin: 0;
		margin-right: 24rpx;
	}

	.form-wrap {
		padding: 12rpx 24rpx;
	}
	.tips {
		font-size: 10rpx;
		color: #2979ff;
	}
	.top-tips {
		padding-left: 16rpx;
		font-size: 10rpx;
		color: #2979ff;
	}
</style>

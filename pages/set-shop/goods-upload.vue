<template>
	<view>
		<view class="right-line">
			<u-button class="custom-btn-mr" size="mini" @click="saveDraft">存草稿</u-button>
			<u-button class="custom-btn" type="primary" size="mini" @click="publish">发布</u-button>
		</view>
		<view class="form-wrap">
			<u-form :model="form" ref="uForm" label-width="140" label-align="left">
				<u-form-item label="商品名称" prop="title">
					<u-input v-model="form.title" placeholder="最多50字" />
				</u-form-item>
				<u-form-item label="商品图片" prop="image" label-position="top">
					<u-upload
						ref="uUpload"
						max-count="9"
						:file-list="previewList"
						:action="upload_url"
						:name="'file'"
						:auto-upload="true"
						:header="header"
					></u-upload>
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
			</u-form>
			
			<u-select
				v-model="cateSelectShow"
				mode="mutil-column-auto"
				:list="list"
				@confirm="confirmCate"
			></u-select>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				previewList: [],
				upload_url: 'https://zuanshi.semoh.cn/api/uploads',
				header: {
					'token': uni.getStorageSync('token')
				},
				cateSelectShow: false,

				form: {
					title: '',
					price: null,
					stock: null,
					sale: null,
					cate: '',
					cate_id: null,
					cate_second_id: null,
				},
				rules: {
					title: [
						{
							required: true,
							message: '请输入商品名称',
							trigger: 'blur,change'
						},
						{
							max: 50,
							message: '最多输入50个字',
							trigger: 'blur,change'
						}
					],
					price: [
						{
							required: true,
							message: '请输入价格',
							trigger: 'blur,change'
						},
					],
					stock: [
						{
							required: true,
							message: '请输入库存',
							trigger: 'blur,change'
						},
					],
					cate: [
						{
							required: true,
							message: '请选择类目',
							trigger: 'blur,change'
						},
					],
				},
				list: [
					{
						value: 1,
						label: '中国',
						children: [
							{
								value: 2,
								label: '广东'
							},
							{
								value: 5,
								label: '广西'
							}
						]
					},
					{
						value: 8,
						label: '美国',
						children: [
							{
								value: 9,
								label: '纽约'
							}
						]
					}
				],
			}
		},
		methods: {
			confirmCate(e) {
				this.form.cate = `${e[0].label}-${e[1].label}`
				this.form.cate_id = e[0].value
				this.form.cate_second_id = e[1].value
			},
			queryData(id) {
				uni.showLoading({ mask: true })
				this.$api.get('/custom/queryGoods', { id }).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.previewList = res.data.image.split(',').map(url => ({ url }))
						this.form = { ...this.form, ...res.data }
						this.form.cate = `${res.data.cate_id}-${res.data.cate_second_id}`
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			checkAndGet() {
				return new Promise((resolve, reject) => {
					this.$refs.uForm.validate((pass) => {
						if (!pass) {
							reject()
						}
						const images = this.$refs.uUpload.lists.filter(val => {
							return val.progress == 100;
						}).map((val) => val.response ? val.response.data : val.url)
						if (!images || !images.length) {
							uni.showToast({
								icon: 'none',
								title: '请上传商品图片'
							})
							reject()
						}
						resolve({ ...this.form, image: images.join(',') })
					})
				})
			},
			checkAndGet() {
				return new Promise((resolve, reject) => {
					this.$refs.uForm.validate((pass) => {
						if (!pass) {
							reject()
						}
						const images = this.$refs.uUpload.lists.filter(val => {
							return val.progress == 100;
						}).map((val) => val.response ? val.response.data : val.url)
						if (!images || !images.length) {
							uni.showToast({
								icon: 'none',
								title: '请上传商品图片'
							})
							reject()
						}
						resolve({ ...this.form, image: images.join(',') })
					})
				})
			},
			save(data) {
				uni.showLoading({
					mask: true
				})
				this.$api.post('/custom/save_draft', data).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						// TODO jump
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
					this.save({ ...res, type: 1 })
				})
			},
			publish() {
				this.checkAndGet().then((res) => {
					this.save({ ...res, type: 2 })
				})
			},
			getAllCategory() {
				uni.showLoading({
					mask: true
				})
				this.$api.get('/category/getAllCategory').then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.list = res.data;
					}
			
					// TODO
					this.list = Array.from({
						length: 5
					}).map((_, i) => ({
						value: i,
						label: `index - ${i + 1}`,
						children: Array.from({
							length: 3
						}).map((_, j) => ({
							value: j,
							label: `subsubsubsubsubsubsubsubsubsub - ${j + 1}`,
						}))
					}));
				}).catch(() => {
					uni.hideLoading()
				})
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.getAllCategory()
		},
		onLoad(e) {
			if (e.id) {
				this.queryData(id);
			}
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
</style>

import { get } from '../api'

// 默认个人测试环境地址 todo
let THREE_D_H5_URL = 'http://47.102.114.234:7777/'

const getThreeDesignH5Url = () => {
	get('3d/geth5url').then((res) => {
		THREE_D_H5_URL = res.data && res.data.url
	}).catch(() => {})
}

export {
	getThreeDesignH5Url,
	THREE_D_H5_URL,
}

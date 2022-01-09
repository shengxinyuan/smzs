import { get } from '../api'

let THREE_D_H5_URL = 'http://47.102.114.234:7777/'

const getThreeDesignH5Url = () => {
	get('3d/geth5url').then((res) => {
		THREE_D_H5_URL = res.data && res.data.url || 'http://47.102.114.234:7777/'
	}).catch(() => {})
}

export {
	getThreeDesignH5Url,
	THREE_D_H5_URL,
}
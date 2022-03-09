import { get } from '../api'

let THREE_D_H5_URL = 'http://3d.semoh.cn/'

const getThreeDesignH5Url = () => {
	get('3d/geth5url').then((res) => {
		THREE_D_H5_URL = res.data && res.data.url || THREE_D_H5_URL
	}).catch(() => {})
}

export {
	getThreeDesignH5Url,
	THREE_D_H5_URL,
}
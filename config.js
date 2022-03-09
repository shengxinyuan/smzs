export const env = 'prod'

// 正式
const prod = {
	apiUrl: 'https://zuanshi.semoh.cn/api/',
	design3dUrl: 'http://3d.semoh.cn/',
	h5Url: 'http://h5.semoh.cn/'
}
// 预发
const pre = {
	apiUrl: 'http://app-api.shengxinyuan.online/api/',
	design3dUrl: 'http://test-3d.semoh.cn/',
	h5Url: 'http://test-h5.semoh.cn/'
}
// 测试
const test = {
	apiUrl: 'http://test-zuanshi.semoh.cn/api/',
	design3dUrl: 'http://test-3d.semoh.cn/',
	h5Url: 'http://test-h5.semoh.cn/'
}

const envMap = {
	prod,
	pre,
	test,
}

export const config = envMap[env];
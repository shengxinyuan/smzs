/**** 此文件说明请看注释 *****/
// 可以用自己项目的请求方法
// 请求配置说明：https://ext.dcloud.net.cn/plugin?id=822

import http from '../api.js'

/**** 结束 *****/
const platform = uni.getSystemInfoSync().platform;
export default {
    getServerNo: (version, isPrompt = false, callback) => {
        http.get('common/app_version').then(res => {
            /* res的数据说明
             * | 参数名称        | 一定返回     | 类型        | 描述
             * | -------------|--------- | --------- | ------------- |
             * | versionCode     | y        | int       | 版本号        |
             * | versionName     | y        | String    | 版本名称      |
             * | versionInfo     | y        | String    | 版本信息      |
             * | updateType      | y        | String    | forcibly = 强制更新, solicit = 弹窗确认更新, silent = 静默更新 |
             * | downloadUrl     | y        | String    | 版本下载链接（IOS安装包更新请放跳转store应用商店链接,安卓apk和wgt文件放文件下载链接）  |
             */
            if (res && res.status === 1) {
				const data = res.data;
				data.versionCode = +data.versionCode;
				data.downloadUrl = platform === 'ios' ? data.iOSUrl : data.androidUrl;
				
                if(data.updateType){
					console.log('updateType',data)
                    callback && callback(data);
                } else {
                    if(data.forceUpdate){
                        data.updateType = "forcibly";
                    } else {
                        data.updateType = "solicit";
                    }
                    callback && callback(data);
                }
            }
        });
    },
	
    // 弹窗主颜色（不填默认粉色）
    appUpdateColor: "1890ff",
    // 弹窗图标（不填显示默认图标，链接配置示例如： '/static/demo/ic_attention.png'）
    appUpdateIcon: ''
}
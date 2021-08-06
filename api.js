const commoneUrl  = "http://zuanshi.dis.wanheweb.com/api/"; //公共路径 
var that = this
//post请求封装
function postRequest(url,data){
	var promise = new Promise((resolve,reject) => {
		var postData = data;
		uni.request({
			url:commoneUrl + url,
			data:postData,
			method:'POST',
			// dataType:"jsonp",
			// jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
			// jsonpCallback:"success_jsonpCallback",

			header:{	// uni.getStorageSync('token')
				'content-type': 'application/x-www-form-urlencoded','token':uni.getStorageSync('token')},
			success:function(res){
				resolve(res.data);
				uni.hideToast()
				if(res.data.message == 'token error'){
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
				}
			},
			error:function(e)
			{
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json','token':uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					uni.hideToast()
					if(res.data.message == 'token error'){
						uni.showModal({
							content:'您还未登录，是否登录？',
							success(aq) {
								if(aq.confirm){
									uni.navigateTo({
										url:'/pages/login/login'
									})
								}
							}
						})
					}
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;
}
//put请求封装
function putRequest(url,data,heads){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"PUT",
				dataType:'json',
				header:{
					'content-type': 'application/json','token': uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					uni.hideToast()
					if(res.data.message == 'token error'){
						uni.showModal({
							content:'您还未登录，是否登录？',
							success(aq) {
								if(aq.confirm){
									uni.navigateTo({
										url:'/pages/login/login'
									})
								}
							}
						})
					}
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//del请求封装
function delRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"DELETE",
				dataType:'json',
				header:{
					'content-type': 'application/json','token': uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
					uni.hideToast()
					if(res.data.message == 'token error'){
						uni.showModal({
							content:'您还未登录，是否登录？',
							success(aq) {
								if(aq.confirm){
									uni.navigateTo({
										url:'/pages/login/login'
									})
								}
							}
						})
					}
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
module.exports = {
    post: postRequest,
    get: getRequest,
	put: putRequest,
	del: delRequest
};

// request.get('HomePageController/selectShoppingList.do',data).then(res=>{
// 	console.log(res,444444444444444);	
// 	this.goods = []
// 	if(res.data.code == 200){
// 		  this.goods = that.data.goods.concat(res.data.data)
// 	  }
// })  
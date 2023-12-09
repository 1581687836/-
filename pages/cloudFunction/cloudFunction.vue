<template>
	<view class="container">
		<image src="../../static/bg/bg.png" class="img1"></image>
		<view @click="Login" >
		<image src="../../static/bg/21.gif" mode="" class="img2"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			  this.getOpenId()
		},
		methods: {
			getOpenId(){				
			      uni.login({
			        success: function (res) {
			            var appid = "wx32be482ce26fc111"        //  这里填写appid
			            var secret = "8cb71efd3f2d8658570ac8de58c1b152"    // 密钥
			            var openid = ""
			            var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code';
			            uni.request({
			              url: url,
			              data: {},
			              method: 'GET',
			              success: function (res) {
			                // 不出意外在控制台就能获取到了
			                console.log(res.data.openid);
							openid=res.data.openid;
							uni.setStorageSync('open-id',openid);
							let op=uni.getStorageSync('open-id');
							console.log(op);
							// console.log('openid'+openid);
			              }
			            });
			          }
			        })
			    },
			Login(){
				uni.getUserProfile({
					desc:'获取微信授权',
					success: (res) => {
						console.log(res);		
						uniCloud.callFunction({
							name:'login',
							data:{
								nickname:res.userInfo.nickName,
								picture:res.userInfo.avatarUrl,
								opid:uni.getStorageSync('open-id')
							},	
							success: (res) => {
								console.log(res);
								uni.redirectTo({
									url:'./index'
								})
							 },
							fail: (err) => {
								console.log(err);
							}
						})
					}
				})
				
				
			},
			
			
	},
	}
</script>

<style>
	.container{
	  position: relative;
	}
	.container .img1{
	  position: absolute;
	  top:0;
	  height:100vh;
	  width:100vw; 
	}
	.img2{
		position: absolute;
		top:210rpx;
		left: 400rpx;
		height:350rpx;
		width:380rpx; 
	}
</style>
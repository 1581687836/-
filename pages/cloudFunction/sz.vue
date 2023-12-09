<template>
	<view class="container">
		<view>
	  <image src="../../static/bg/bg1 (1).png" class="bg"></image>
	  </view>
	  <view class="bigBox">
	    <image src="../../static/icon/回到主页.png" class="b1"></image>
	   <image src="../../static/icon/游戏前进.png" class="b2" ></image>
	   <image src="../../static/icon/游戏后退.png" class="b22" @click="houtui"></image>
	    <image src="../../static/icon/邮件.png" class="b3"></image>
	    <image src="../../static/icon/游戏币.png" class="b4">
		<view class="coin">
			{{coin}}
		</view>
		</image>
	  </view>
	  <view>
	  	<image src="../../static/image/bg2.png" mode="" class="dk" ></image>
	  	<image src="../../static/image/打开背景音乐.png" mode="" class="dkwz" @click="getMusic()"></image>
	  	<image src="../../static/image/bg2.png" mode="" class="gb"></image>
	  	<image src="../../static/image/关闭背景音乐.png"  class="gbwz"></image>
	  	</image>
	  </view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				coin:0
			}
		},	
		onLoad() {
			this.getcoin()
		},
			onShow() {
				uni.hideHomeButton()
			},
		methods: {	
			getMusic(){
				this.music.play();
				console.log('打开了');
			},
			getcoin(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'index',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						 this.coin=res.result.data[0].coin;
					}
					
				})
			},
			houtui(){
				uni.redirectTo({
					url:"./index"
				})
			},
		},
	}
</script>

<style>
	.container{
	  position: relative;
	}
	.bg{
	  position: absolute;
	  top:0;
	  height:100vh;
	  width:100vw; 
	}
	.bigBox{
	  position: absolute;
	  top:25rpx;
	  left:5vw;
	  width: 90vw;
	  height: 20vh;
	  background-color:#FEE1C2;
	  border-radius: 15rpx;
	  z-index: 1;
	}
	.bigBox .b1{
	  position: absolute;
	  width: 70rpx;
	  height: 70rpx;
	  left:35rpx;
	  top:50rpx;
	  
	}
	.bigBox .b22{
	  position: absolute;
	  width: 75rpx;
	  height: 75rpx;
	  left:35rpx;
	  top:140rpx;
	  z-index: 1;
	 
	}
	.bigBox .b2{
	  position: absolute;
	  width: 75rpx;
	  height: 75rpx;
	  left:120rpx;
	  top:140rpx;
	  z-index: 1;
	 
	}
	.bigBox .b3{
	  position: absolute;
	  width: 75rpx;
	  height: 75rpx;
	  right:38rpx;
	  top:140rpx;
	  
	}
	.bigBox .b4{
	  position: absolute;
	  width: 300rpx;
	  height:100rpx;
	  right:20rpx;
	  top:35rpx;
	}
	.coin{
		position: absolute;
		font-size: 20px;
		color:white;
		top:60rpx;
		right:150rpx;
	}
	.dk{
		position: absolute;
		width: 580rpx;
		height: 180rpx;
		top:300rpx;
		left:70rpx;
	}
	.dkwz{
		position: absolute;
		width: 300rpx;
		height: 100rpx;
		top:330rpx;
		left:170rpx;
	}
	.gbwz{
		position: absolute;
		width: 300rpx;
		height: 100rpx;
		top:585rpx;
		left:170rpx;
	}
	.gb{
		position: absolute;
		width: 580rpx;
		height: 180rpx;
		top:550rpx;
		left:70rpx;
	}
</style>
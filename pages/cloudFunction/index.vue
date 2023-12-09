<template>
	<view class="container">
		<view>
	  <image src="../../static/bg/bg1 (1).png" class="bg"></image>
	  </view>
	  <view class="bigBox">
	    <image src="../../static/icon/回到主页.png" class="b1"></image>
	   <image src="../../static/icon/游戏前进.png" class="b2" @click="qianjin"></image>
	   <image src="../../static/icon/游戏后退.png" class="b22"></image>
	    <image src="../../static/icon/邮件.png" class="b3"></image>
	    <image src="../../static/icon/游戏币.png" class="b4">
		<view class="coin">
			{{coin}}
		</view>
		</image>
	  </view>
	  <view class="leftBox">
		<image src="../../static/image/bg2.png" mode="" class="renji"></image>
		<image src="../../static/image/查询调剂信息.png" mode="" class="renjiwenzi" @click='search'></image>
		<image src="../../static/image/bg2.png" mode="" class="tuijian"></image>
		<image src="../../static/image/推荐调剂.png" mode="" class="tuijianwenzi" @click='tuijian'></image>
		<image src="../../static/image/bg3.png" mode="" class="zhenren"></image>
		<image src="../../static/image/开始游戏.png" mode="" class="zhenrenwenzi" @click='play'></image>
	  </view>
	  <view class="rightBox">
	    <image src="../../static/icon/帮助手册.png" class="i1" @click="qianjin"></image>
	    <image src="../../static/icon/任务.png" class="i2" @click="renwu"></image>		
		<image src="../../static/icon/权限角色管理.png" class="i3" @click="register" ></image>	    
	    <image src="../../static/icon/设置 (1).png" class="i4" @click="shezhi"></image>
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
			play(){
				uni.redirectTo({
					url:"./play"
				})
			},
			register(){
				uni.redirectTo({
					url:"./register"
				})
			},
			qianjin(){
				uni.redirectTo({
					url:'./help'
				})
			},
			renwu(){
				uni.redirectTo({
					url:'./renwu'
				})
			},
			shezhi(){
				uni.redirectTo({
					url:"./sz"
				})
			},
			search(){
				uni.redirectTo({
					url:"./search"
				})
			},
			tuijian(){
				uni.redirectTo({
					url:"./tuijian"
				})
			}
			
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
	.leftBox{
	  position: absolute;
	  top:25vh;
	  left:5vw;
	  width: 60vw;
	  height: 55vh;
	  background-color:#FEE1C2;
	  border-radius: 10rpx;
	  z-index: 1;
	
	}
	.rightBox{
	  position: absolute;
	  top:25vh;
	  right:5vw;
	  width: 25vw;
	  height: 55vh;
	  background-color:#FEE1C2;
	  border-radius: 10rpx;
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
	.rightBox image{
	  width: 90rpx;
	  height: 90rpx;
	}
	.i1{
	 position: absolute;
	 left:45rpx;
	 top:100rpx;
	}
	.i2{
	  position: absolute;
	  left:45rpx;
	  top:240rpx;
	}
	.i3{
	  position: absolute;
	  left:45rpx;
	  top:380rpx;
	}
	.i4{
	  position: absolute;
	  left:45rpx;
	  top:520rpx;
	}
	.renji{
		position: absolute;
		width: 400rpx;
		height: 130rpx;
		top:120rpx;
		left:20rpx;
	}
	.renjiwenzi{
		position: absolute;
		width: 260rpx;
		height: 100rpx;
		top:135rpx;
		left:70rpx;
	}
	.tuijian{
		position: absolute;
		width: 400rpx;
		height: 130rpx;
		top:300rpx;
		left:20rpx;
	}
	.tuijianwenzi{
		position: absolute;
		width: 260rpx;
		height: 100rpx;
		top:310rpx;
		left:70rpx;
	}
	.zhenrenwenzi{
		position: absolute;
		width: 260rpx;
		height: 100rpx;
		top:485rpx;
		left:80rpx;
	}
	.zhenren{
		position: absolute;
		width: 400rpx;
		height: 130rpx;
		top:480rpx;
		left:20rpx;
	}
	.coin{
		position: absolute;
		font-size: 20px;
		color:white;
		top:60rpx;
		right:150rpx;
	}
</style>
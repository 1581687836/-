<template>
	<view class="container">
		<view>
		<image src="../../static/bg/bg1 (1).png" class="bg"></image>
		</view>
		<view class="bigBox">
		  <image src="../../static/icon/回到主页.png" class="b1"></image>
		 <image src="../../static/icon/游戏前进.png" class="b2" @click="qianjin"></image>
		 <image src="../../static/icon/游戏后退.png" class="b22" @click="houtui"></image>
		  <image src="../../static/icon/邮件.png" class="b3"></image>
		  <image src="../../static/icon/游戏币.png" class="b4"></image>
		  <view class="coin">
		  	{{coin}}
		  </view>
		</view>
		<view class="jindu">
			<h2 class="wenzi">
				主线任务
			</h2>
			<view class="">
				<p >每日登录</p>
				<image src="../../static/image/passed.png"  class="img1" v-show="show1"></image>
			</view>
			<view class="">
				<p >首次完成角色注册</p>
				<image src="../../static/image/passed.png" class="img2" v-show="show2"></image>
			</view>
			<view class="">
				<p >完成个人调剂志愿填报</p>
				<image src="../../static/image/passed.png" class="img3" v-show="show3"></image>
			</view>
			<view class="">
				<p >至少获取一个院校的复试通知</p>
				<image src="../../static/image/passed.png" class="img4" v-show="show4"></image>
			</view>
			<view class="">
				<p >调剂成功</p>
				<image src="../../static/image/passed.png" class="img5" v-show="show5"></image>
			</view>
			
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {	
				coin:0,
				show1:true,
				show2:false,
				show3:false,
				show4:false,
				show5:false
			};
		},
		onLoad() {
			this.getcoin()
			this.getrenwuFirstRigister()
		},
		onShow() {
			uni.hideHomeButton()
		},
		methods: {
			getcoin(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'renwu',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						this.coin=res.result.data[0].coin;
					}
					
				})
			},
			getrenwuFirstRigister(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'renwuFirstRigister',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						if(res.result.data[0].isFirstRegister=='true'){
							this.show2=true;
						}
					}
					
				})
			},
			houtui(){
				uni.redirectTo({
					url:'./index'
				})
			},
			}
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
	.jindu{
		position: absolute;
		top:290rpx;
		left:5vw;
		width: 90vw;
		height: 70vh;
		font-size: 20px;
		padding-left: 0rpx;
		padding-right: 0rpx;
		overflow: scroll;
		color:white;
		background-color:#FEE1C2;
		border-radius: 15rpx;
		z-index: 1;
	
	}
	.wenzi{
		padding-top: 40rpx;
		font-size: 25px;
		text-align: center;
	}
	p{
		color:saddlebrown;
		text-indent: 1em;
		line-height: 120rpx;
		font-size: 23px;
	}
	.coin{
		position: absolute;
		font-size: 20px;
		color:white;
		top:60rpx;
		right:150rpx;
	}
	.img1{
		position: absolute;
		top:90rpx;
		left:220rpx;
		width: 160rpx;
		height: 160rpx;
	}
	.img2{
		position: absolute;
		top:200rpx;
		left:405rpx;
		width: 160rpx;
		height: 160rpx;
	}
	.img3{
		position: absolute;
		top:320rpx;
		left:485rpx;
		width: 160rpx;
		height: 160rpx;
	}
	.img4{
		position: absolute;
		top:440rpx;
		left:220rpx;
		width: 160rpx;
		height: 160rpx;
	}
	.img5{
		position: absolute;
		top:580rpx;
		left:220rpx;
		width: 160rpx;
		height: 160rpx;
	}
</style>
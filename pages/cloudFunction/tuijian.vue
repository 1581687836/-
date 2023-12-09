<template>
	<view class="container">
		<view>
		<image src="../../static/bg/bg1 (1).png" class="bg"></image>
		</view>
		<view class="bigBox">
		  <image src="../../static/icon/回到主页.png" class="b1"></image>
		 <image src="../../static/icon/游戏前进.png" class="b2"></image>
		 <image src="../../static/icon/游戏后退.png" class="b22" @click="houtui"></image>
		  <image src="../../static/icon/邮件.png" class="b3"></image>
		  <image src="../../static/icon/游戏币.png" class="b4"></image>
		  <view class="coin">
		  	{{coin}}
		  </view>
		</view>
		
		<!-- <view @click="add" class="btn1">
			<button>点击这里</button>
		</view> -->
		<view class="cxinfo">
			<ul class="cxinfo-ul">
				<li v-for="item in myObject" :key="item._id" class="infogeted">
				  <span class="sshool">{{item.school}}</span>
				  <span class="smajor">{{item.major}}</span><br>
				  <span class="sreceivenumber">接受调剂名额:{{item.receivenumber}}</span>
				  
				  </li>
				  <br>
			</ul>
			
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {	
				coin:0,
				myObject:{},
				
			};
		},
		onLoad() {
			this.getcoin(),
			this.gettuijian()
			
		},
		onShow() {
			uni.hideHomeButton()
		},
		methods: {
			gettuijian(){
				uniCloud.callFunction({
					name:'tuijianok',
					data:{
						opid:uni.getStorageSync('open-id')
					},
				}).then(res=>{
					console.log(res);
					res.result.forEach((item) => {
						const key = parseInt(item.iid);
					    this.$set(this.myObject, key, item);
						// this.$set(this.myObject[key], 'isChecked', true);
					    });
					console.log(this.myObject);
				})
			},
			getcoin(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'tuijian',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						this.coin=res.result.data[0].coin;
					}
					
				})
			},
			// add(){
			// 	uniCloud.callFunction({
			// 		name:'tuijian',
			// 		data:{
						
			// 		},
			// 		success: (res) => {
			// 			console.log(res);
						
			// 		}
			// 	})
				
			// },
			houtui(){
				uni.redirectTo({
					url:'./index'
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
	.btn1{
		position: absolute;
		top:310rpx;
		left:10rpx;
	}
	.cxinfo{
		position: absolute;
		padding-left: 10rpx;
		padding-right: 0rpx;
		top:290rpx;
		left:5vw;
		width: 90vw;
		height: 70vh;
		background-color: #FEE1C2;
		font-size: 18px;
		color: black;
		z-index:10;
		border-radius: 2%;
		overflow: scroll;
	}
	.cxinfo-ul{
		position: absolute;
		padding-left: 10rpx;
		padding-right: 0rpx;
		top:110rpx;
		left:5vw;
		width: 90vw;
		height: 70vh;
		background-color: #FEE1C2;
		font-size: 18px;
		color: black;
		z-index:10;
		border-radius: 2%;
		overflow: scroll;
	}
	.infogeted{
		position: relative;
		margin-bottom: 40rpx;
		width: 600rpx;
		height: 180rpx;
		border-radius: 8%;
		box-shadow: 3px 3px 3px #888888;
	}
	.sshool{
		position: absolute;
		top:22rpx;
		font-size: 22px;
		left:10rpx;
	}
	.smajor{
		position: absolute;
		top:32rpx;
		font-size: 16px;
		left:315rpx;
	}
	.sreceivenumber{
		position: absolute;
		top:110rpx;
		font-size: 16px;
		left:10rpx;
	}
</style>
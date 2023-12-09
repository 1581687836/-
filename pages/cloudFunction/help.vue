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
		  <view class="coin"  >
		  	{{coin}}
		  </view>
		</view>
		<view class="shouce">
			<h2 class="wenzi">游戏手册</h2>
			<p>首先，玩家在登录游戏之后，需创建游戏角色才能开始游戏。且每位玩家每日首次创建好游戏角色之后，
			系统会赠送玩家一定数量游戏币作为玩家启动资金。</p><br>
			<p>随后，玩家需根据教学秘书NPC指引开始考研调剂，考研调剂分为志愿填报与模拟复试两个阶段。
			在志愿填报阶段中，玩家需完成志愿填报与接受复试通知两个任务，当玩家将两个任务都完成后，系统将给予玩家一定数量的游戏币奖励并解锁下一阶段任务；
			在模拟复试阶段中，玩家需要同面试官NPC进行模拟面试，并等待最终拟录取名单。若玩家被录取，则解锁玩家调剂成功任务，并奖励玩家一定游戏币。</p><br>
			<p>最后，教学秘书NPC会指引玩家查看任务清单，若玩家完成任务清单上所有任务则代表玩家游戏挑战成功，否则玩家游戏挑战失败。
			游戏不限制玩家挑战次数，若玩家游戏币充足，可循环挑战；若玩家游戏币耗尽则需要等待第二天系统刷新，重新注册新角色获取初试启动游戏币</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coin:0
			};
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
						info:'help',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						this.coin=res.result.data[0].coin;
					}
					
				})
			},
			qianjin(){
				uni.redirectTo({
					url:'./register'
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
	.shouce{
		position: absolute;
		top:290rpx;
		left:5vw;
		width: 90vw;
		height: 70vh;
		font-size: 20px;
		padding-left: 30rpx;
		padding-right: 30rpx;
		overflow: scroll;
		color:saddlebrown;
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
		text-indent: 2em;
		line-height: 90rpx;
	}
	.coin{
		position: absolute;
		font-size: 20px;
		color:white;
		top:60rpx;
		right:150rpx;
	}
</style>
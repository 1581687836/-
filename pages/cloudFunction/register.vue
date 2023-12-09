<template>
	<view class="container">
		<view >			
			<image src="../../static/bg/bg1 (1).png" class="bg"></image>
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
		</view>
		<view>
			<image src="../../static/image/bg2.png" mode="" class="zc" ></image>
			<image src="../../static/image/开始注册角色.png" mode="" class="zcwz"  @click="showModal1"></image>
			<image src="../../static/image/bg2.png" mode="" class="ck"></image>
			<image src="../../static/image/查看角色信息.png" @click="showModal2" class="ckwz"></image>
			<image src="../../static/image/bg2.png" mode="" class="xg">	
			<image src="../../static/image/修改角色信息.png" @click="showModal3" class="xgwz"></image>
			</image>
		</view>
		<view>
		
	<form @submit="onSubmit" v-show="showModalStatus1" class="fm">
		<view class="close" @click="close">
			<image src="../../static/image/close.png" class="closeimg"></image>
		</view>
			<view class="jb">
				<h2>基本信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					玩家昵称：{{nickname}}<br>
				</view>
				<view class="a1">
					玩家年龄：<input type="text" name='age'>
				</view>	
			</view>	
			<view class="bk">
				<h2 >本科信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					本科院校：<input type="text" name='yourschool'><br>
				</view>
				<view class="a1">
					玩家专业：<input type="text" name='yourmajor'>
				</view>
			</view>	
			<view class="ky">
				<h2 >考研信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					考研院校：<input type="text" name='applyschool'><br>
				</view>
				<view class="a1">
					考研专业：<input type="text" name='applymajor'><br>
				</view>
				<view class="a1">
					考研分数：<input type="text" name='totalscore'><br>
				</view>
				<view class="a1">
					政治分数：<input type="text" name='politics'><br>
				</view>
				<view class="a1">
					英语分数：<input type="text" name='english'><br>
				</view>
				<view class="a1">
					数学分数：<input type="text" name='math'><br>
				</view>
				<view class="a1">
					专业课：<input type="text" name='majorcourse'>
				</view>
			</view>	
		<view >
		<button form-type="submit" class="btn">提交</button>
		</view>
	</form>
	
	<form @click="check" v-show="showModalStatus2" class="fm">
		<view class="close" @click="close">
			<image src="../../static/image/close.png" class="closeimg"></image>
		</view>
			<view class="jb">
				<h2>基本信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					玩家昵称：{{nickname}}<br>
				</view>
				<view class="a1">
					玩家年龄：{{age}}
				</view>	
			</view>	
			<view class="bk">
				<h2 >本科信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					本科院校：{{yourschool}}
				</view>
				<view class="a1">
					玩家专业：{{yourmajor}}
				</view>
			</view>	
			<view class="ky">
				<h2 >考研信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					考研院校：{{applyschool}}
				</view>
				<view class="a1">
					考研专业：{{applymajor}}
				</view>
				<view class="a1">
					考研分数：{{totalscore}}
				</view>
				<view class="a1">
					政治分数：{{politics}}
				</view>
				<view class="a1">
					英语分数：{{english}}
				</view>
				<view class="a1">
					数学分数：{{math}}
				</view>
				<view class="a1">
					专业课：{{majorcourse}}
				</view>
			</view>	
	</form>
	
	<form @submit="update" v-show="showModalStatus3" class="fm">
		<view class="close" @click="close">
			<image src="../../static/image/close.png" class="closeimg"></image>
		</view>
			<view class="jb">
				<h2>基本信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					玩家昵称：{{nickname}}<br>
				</view>
				<view class="a1">
					玩家年龄：<input type="text" name='age' >
				</view>	
			</view>	
			<view class="bk">
				<h2 >本科信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					本科院校：<input type="text" name='yourschool'><br>
				</view>
				<view class="a1">
					玩家专业：<input type="text" name='yourmajor'>
				</view>
			</view>	
			<view class="ky">
				<h2 >考研信息</h2>
			</view>
			<view class="n1">
				<view class="a1">
					考研院校：<input type="text" name='applyschool' ><br>
				</view>
				<view class="a1">
					考研专业：<input type="text" name='applymajor'><br>
				</view>
				<view class="a1">
					考研分数：<input type="text" name='totalscore'><br>
				</view>
				<view class="a1">
					政治分数：<input type="text" name='politics'><br>
				</view>
				<view class="a1">
					英语分数：<input type="text" name='english'><br>
				</view>
				<view class="a1">
					数学分数：<input type="text" name='math'><br>
				</view>
				<view class="a1">
					专业课：<input type="text" name='majorcourse'>
				</view>
			</view>	
		<view >
		<button form-type="submit" class="btn1">修改并提交</button>
		</view>
	</form>
	</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				showModalStatus1: false,
				showModalStatus2: false,
				showModalStatus3: false,
				coin:0,
				nickname:'',
				age:'',
				yourschool:'',
				yourmajor:'',
				applyschool:'',
				applymajor:'',
				totalscore:'',
				politics:'',
				english:'',
				math:'',
				majorcourse:''
				
			}
		},	
			onShow() {
				uni.hideHomeButton()
			},
			onLoad() {
				this.getcoin()
			},
		methods: {
			getcoin(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'register',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						this.coin=res.result.data[0].coin;
						console.log(this.coin);
						this.nickname=res.result.data[0].nickname;
					}
					
				})
			},
			close(){
				this.showModalStatus1=false;
				this.showModalStatus2=false;
				this.showModalStatus3=false;
			},
			showModal1(){
				this.showModalStatus1=true;
			},
			showModal2(){
				this.showModalStatus2=true;
			},
			showModal3(){
				this.showModalStatus3=true;
			},
			houtui(){
				uni.redirectTo({
					url:'./index'
				})
			},
			onSubmit(e){
				console.log(e);
				this.showModalStatus=false;
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'zcchangecoin',
						opid:uni.getStorageSync('open-id')
					},
				}).then(res=>{
					console.log(res);
					if(res.result!='o'){
						this.coin=res.result.data[0].coin;
					}
						this.showModalStatus1=false;
				}).catch()
				uniCloud.callFunction({
					name:'role',
					data:{
						info:'zc',
						opid:uni.getStorageSync('open-id'),
						age:e.detail.value.age,
						yourschool:e.detail.value.yourschool,
						yourmajor:e.detail.value.yourmajor,
						applyschool:e.detail.value.applyschool,
						applymajor:e.detail.value.applymajor,
						totalscore:e.detail.value.totalscore,
						politics:e.detail.value.politics,
						english:e.detail.value.english,
						math:e.detail.value.math,
						majorcourse:e.detail.value.majorcourse
					},
				}).then(res=>{
					console.log(res);	
				}).catch()
			},
			check(){
				uniCloud.callFunction({
					name:"check",
					data:{
						info:'ck',
						opid:uni.getStorageSync('open-id')
					},
				}).then(res=>{
					console.log(res);
					this.age=res.result.data[0].age;
					this.yourschool=res.result.data[0].yourschool;
					this.yourmajor=res.result.data[0].yourmajor,
					this.applyschool=res.result.data[0].applyschool,
					this.applymajor=res.result.data[0].applymajor,
					this.totalscore=res.result.data[0].totalscore,
					this.politics=res.result.data[0].politics,
					this.english=res.result.data[0].english,
					this.math=res.result.data[0].math,
					this.majorcourse=res.result.data[0].majorcourse	
				}).catch()
			},
			update(e){
				console.log(e);
				uniCloud.callFunction({
					name:'role',
					data:{
						info:'xg',
						opid:uni.getStorageSync('open-id'),
						age:e.detail.value.age,
						yourschool:e.detail.value.yourschool,
						yourmajor:e.detail.value.yourmajor,
						applyschool:e.detail.value.applyschool,
						applymajor:e.detail.value.applymajor,
						totalscore:e.detail.value.totalscore,
						politics:e.detail.value.politics,
						english:e.detail.value.english,
						math:e.detail.value.math,
						majorcourse:e.detail.value.majorcourse
					},					
				}).then(res=>{
					console.log(res);
					this.showModalStatus1=false;
				}).catch()
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
	  z-index: -100;
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
	.zhuce{
		display: none;
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
	.zc{
		position: absolute;
		width: 580rpx;
		height: 180rpx;
		top:300rpx;
		left:70rpx;
	}
	.zcwz{
		position: absolute;
		width: 300rpx;
		height: 100rpx;
		top:330rpx;
		left:170rpx;
	}
	.ckwz{
		position: absolute;
		width: 300rpx;
		height: 100rpx;
		top:585rpx;
		left:170rpx;
	}
	.xgwz{
		position: absolute;
		width: 300rpx;
		height: 100rpx;
		top:830rpx;
		left:170rpx;
	}
	.ck{
		position: absolute;
		width: 580rpx;
		height: 180rpx;
		top:550rpx;
		left:70rpx;
	}
	.xg{
		position: absolute;
		width: 580rpx;
		height: 180rpx;
		top:800rpx;
		left:70rpx;
	}
	.coin{
		position: absolute;
		font-size: 20px;
		color:white;
		top:60rpx;
		right:150rpx;
	}
	.fm{
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
	.a1{
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.jb{
		padding-top: 40rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		text-align: center;
		font-size: 25px;
		border-bottom: 1px solid darkgray;
	}
	.n1{
		margin-top:10rpx;
		margin-left: 60rpx;
	
	}
	.bk{
		padding-top: 40rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		text-align: center;
		font-size: 25px;
		border-bottom: 1px solid darkgray;
	}
	.ky{
		padding-top: 40rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		text-align: center;
		font-size: 25px;
		border-bottom: 1px solid darkgray;
	}
	input{
		border: 1px solid darkgray;
		display: inline-block;
		border-radius: 5%;
		height: 5vh;
		vertical-align: middle;
	}
	.close{
		position: absolute;
		z-index: 20;
	}
	.closeimg{
		position: absolute;
		width: 12vw;
		height: 8vh;
		top:-23rpx;
		left:600rpx;
		z-index:20;
	}
	.btn{
		width: 200rpx;
		height: 90rpx;
		background-color: orange;
		color:white;
		font-size: 20px;
		margin-bottom: 20rpx;
	}
	.btn1{
		width: 300rpx;
		height: 90rpx;
		background-color: orange;
		color:white;
		font-size: 20px;
		margin-bottom: 20rpx;
	}
</style>
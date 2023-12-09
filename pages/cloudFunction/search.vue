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
	  <view class="">
		  <form ref="myForm" @submit="onSearch" >
			  <view class="form-select">
			  	 <picker mode="selector" :range="['按照院校查询','按照专业查询']" class="pk" @change="onPickerChange">
					 <view class="pkwenzi">
					 	{{selectWay}}
					 </view>
				 </picker>
			  </view>
	  	<view class="chaxun">
	  		<input class="cxinput" placeholder="请输入院校或专业" name="cxsearch"/>
	  	</view>	
		<button form-type="submit" class="form-btn"></button>
		<view class="cxinfo">
			<ul class="cxinfo-ul">
				<li v-for="item in myObject" :key="item._id" class="infogeted">
				 <icon :type="item.isChecked ? 'circle' : 'success'" :color="item.isChecked ? '#ffffff' : '#ff0000'" class="icon-box"  @click="toggleChecked(item)"/>
				  <span class="sshool">{{item.school}}</span>
				  <span class="smajor">{{item.major}}</span><br>
				  <span class="sreceivenumber">接受调剂名额:{{item.receivenumber}}</span>
				  
				  </li>
				  <br>
			</ul>	
		</view>
		
		</form>
	  </view>
	  
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				selectWay:'选择查询方式',
				myObject:{},
				myObject1:{},
				coin:0
			};
		},
		onLoad() {
			this.getdata(),
			this.getcoin()
		},
		onShow() {
			uni.hideHomeButton()
		},
		mounted() {
		    this.$nextTick(() => {
		      // 在Vue实例完全挂载后访问$refs对象
		      console.log(this.$refs);
		    });
		},
		methods: {
			getcoin(){
				uniCloud.callFunction({
					name:'coin',
					data:{
						info:'search',
						opid:uni.getStorageSync('open-id')
					},
					success: (res) => {
						console.log(res);
						this.coin=res.result.data[0].coin;
					}
					
				})
			},
			toggleChecked(item){
				item.isChecked=!item.isChecked;
			},
			onSearch(e){
				console.log(e);
				uniCloud.callFunction({
					name:'search',
					data:{
						selectWay:this.selectWay,
						info:e.detail.value.cxsearch
					},
					
				}).then(res=>{
					console.log(res);
					res.result.data.forEach((item) => {
						 item.isChecked = true;
						 item.iid = parseInt(item.iid);
					     this.$set(this.myObject1, item.iid, item);
					    });
					console.log(this.myObject1);
					this.myObject=this.myObject1;
					console.log(this.myObject)
				}).catch()
			},
			onPickerChange(e){
				const index=e.detail.value;
				const selectedValue = ['按照院校查询','按照专业查询'][index]; // 获取选中的值
				this.selectWay = selectedValue; // 将选中的值显示在页面上
				console.log(this.selectWay);
			},
			getdata(){
				uniCloud.callFunction({
					name:"getname",
					data:{
						
					},					
				}).then(res=>{
					console.log(res);
					res.result.data.forEach((item) => {
						const key = parseInt(item.iid);
					    this.$set(this.myObject, key, item);
						this.$set(this.myObject[key], 'isChecked', true);
					    });
					console.log(this.myObject);
				}).catch()
			},
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
	.chaxun{
		position: absolute;
		top: 300rpx;
		left: 260rpx;
		z-index: 20;
		
	}
	.pk{
		position: absolute;
		top:300rpx;
		left:50rpx;
		z-index:20;
		border: 1px solid black;
		width: 200rpx;
		height: 70rpx;
		border-radius: 8%;
	}
	.form-btn{
		position: absolute;
		top:300rpx;
		right:55rpx;
		width: 80rpx;
		height: 80rpx;
		z-index:30;
		background-color: #FEE1C2;
		border: none;
		cursor: pointer;
		background-image: url(../../static/image/搜索按钮.png);
	}
	.cxinput{
		display: inline-block;
		border: 1px solid black;
		width: 350rpx;
		height: 70rpx;
		border-radius: 8%;
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
	
	.tiaojibtn{
		position: absolute;
		top:700rpx;
		left:100rpx;
		color:white;
		background-color: #FEE1C2;
	}
	.icon-box{
		position: absolute;
		top:108rpx;
		left:520rpx;
		width: 200rpx;
		height: 200rpx;
	}
	.tiaojibtn{
		position: absolute;
		top:100rpx;
		left:30rpx;
	}
</style>
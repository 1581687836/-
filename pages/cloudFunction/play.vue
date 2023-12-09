<template>
	<view class="container">
		<view>			
			<image src="../../static/image/模拟面试.png" class="bg"></image>
			</view>
	  <view>
	    <h2 class="ques">{{ question.title }}</h2>
	    <ul class="xuanxiang">
			<!--  -->
	      <li  v-for="option in question.options" :key="option.id" @click="selectOption(option.id)" :class="{ selected: selectedOption === option.id }">
	        <view class="opla">{{ option.label }}</view>
	      </li>
	    </ul> 
	    <image src="../../static/image/前进.png" @click="submitAnswer" class="qianjin"></image>
	    
	  </view>
	  
	  <view v-if="isFinished">
	    <h2>已完成所有题目</h2>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					questionIndex: 0,
				    selectedOption: null,
				    questions: [
				      {
				        title: "提前学习过研究生课程吗？",
				        options: [
				          { id: 1, label: "学习过" },
				          { id: 2, label: "未学习过" }
				        ]
				      },
				      {
				        title: "发表过英文作品（论文、期刊或杂志）吗？",
				        options: [
				          { id: 1, label: "发表过" },
				          { id: 2, label: "未发表过" }
				        ]
				      },
					  {
					    title: "通过了四六级英语口语考试吗？",
					    options: [
					      { id: 1, label: "通过" },
					      { id: 2, label: "未通过" }
					    ]
					  },
					  {
					    title: "获得过外语类比赛奖项吗？",
					    options: [
					      { id: 1, label: "获得过" },
					      { id: 2, label: "未获得过" }
					    ]
					  },
					  {
					    title: "和老师有一起申报过课题吗？",
					    options: [
					      { id: 1, label: "有" },
					      { id: 2, label: "没有" }
					    ]
					  },
					  {
					    title: "独立或参与开发软件或系统吗？",
					    options: [
					      { id: 1, label: "开发过" },
					      { id: 2, label: "未开发过" }
					    ]
					  },
					  {
					    title: "有过专业实习经历吗？",
					    options: [
					      { id: 1, label: "有" },
					      { id: 2, label: "没有" }
					    ]
					  },
					  {
					    title: "取得过软件著作权吗？",
					    options: [
					      { id: 1, label: "取得" },
					      { id: 2, label: "未取得" }
					    ]
					  },
					  {
					    title: "参与过校内外科技竞赛并获奖吗？",
					    options: [
					      { id: 1, label: "有" },
					      { id: 2, label: "没有" }
					    ]
					  },
					  {
					    title: "在本科获得过奖学金吗？",
					    options: [
					      { id: 1, label: "获得过" },
					      { id: 2, label: "未获得过" }
					    ]
					  },
				    ]
			}
		},	
		onShow() {
			uni.hideHomeButton()
		},
		 computed: {
		    question() {
		      return this.questions[this.questionIndex];
		    },
		    isFinished() {
		      return this.questionIndex >= this.questions.length;
		    }
		  },
		  methods: {
		    selectOption(optionId) {
		      this.selectedOption = optionId;
		    },
		    submitAnswer() {
		      if (this.selectedOption === null) {
		        // alert("请选择一个选项");
		        return;
		      }
		      
		      // 处理用户选择的选项
		      console.log("用户选择了选项：" + this.selectedOption);
		      
		      // 进行下一题或结束流程
		      if (this.questionIndex < this.questions.length - 1) {
		        this.questionIndex++;
		        this.selectedOption = null;
		      } else {
		        // alert("已完成所有题目");
		      }
		    }
		  }
		}
</script>

<style>
	.selected{
		background-color: pink;
	}
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
	.ques{
		position: absolute;
		top:860rpx;
		left: 65rpx;
		z-index: 10;
		font-size: 23px;
	}
	.xuanxiang{
		position: absolute;
		top:980rpx;
		left:100rpx;
		z-index: 10;
		font-size: 22px;
	}
	.opla{
		margin-bottom: 5rpx;
		width: 300rpx;
		height: 80rpx;
		text-align: center;
		background-color: darkorange;
		border-radius: 20%;
	}
	.qianjin{
		position: absolute;
		top:1060rpx;
		left:630rpx;
		width: 100rpx;
		height: 100rpx;
	}
</style>
var music={
	play(){
		const innerAudio=uni.createInnerAudioContext();
		// 自动播放
		innerAudio.auto=false;
		innerAudio.src='./music.m4a';
		
	}
}
module.exports=music;
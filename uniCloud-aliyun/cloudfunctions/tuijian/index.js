'use strict';
const db=uniCloud.database();
exports.main = async (event, context) => {
	// for(let i=0;i<10000;i++){
	// 	const sch=['江西财经大学','南昌大学','东华理工大学','井冈山大学','江西师范大学','南昌航空大学','江西理工大学','华东交通大学','江西农业大学'];
	// 	const maj=['计算机科学与技术','软件工程','计算机技术','电子信息','VR技术与应用'];
	// 	const rec=['1人','2人','3人','4人','5人','6人'];
		
	// 	const sl=sch[Math.floor(Math.random()*sch.length)];
	// 	const mr=maj[Math.floor(Math.random()*maj.length)];
	// 	const rr=rec[Math.floor(Math.random()*rec.length)];
	// 	await db.collection('tiaojitianb').add({
	// 		school:sl,
	// 		major:mr,
	// 		receivenumber:rr
	// 	})
	// }
	// let res=await db.collection('tiaojitianb').get();
	// return res;
	
};

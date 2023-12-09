'use strict';
const db=uniCloud.database();
exports.main = async (event, context) => {
	const{opid}=event;
	let res=await db.collection('roleInfo').where({
		openid:opid
	}).field({
		applyschool:true,
		applymajor:true
	}).get();
	const applyschool1=res.data[0].applyschool;
	const applymajor1=res.data[0].applymajor;
	console.log(applyschool1);
	console.log(applymajor1);
	let result=await db.collection('tiaojitianb').where({
		school:applyschool1,
		major:applymajor1
	}).get();
	 const recommendations = result.data.sort((a, b) => {
	    // 根据推荐度进行排序
	    return b.recommendation - a.recommendation
	  })
	  return recommendations
};

'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const{selectWay,info}=event;
	if(selectWay=='按照院校查询'){
		let result=await db.collection('tiaojiInfo').where({
			school:info
		}).get()
		return result;
	}
	if(selectWay=='按照专业查询'){
		let result=await db.collection('tiaojiInfo').where({
			major:info
		}).get()
		return result;
	}
};

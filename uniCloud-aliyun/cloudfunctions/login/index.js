'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {nickname,picture,opid}=event;
	let res=await db.collection('user').where({
		openid:opid
	}).get()
	if(res.data.length>0){
		return 'ok';
	}
	else{
	let result=await db.collection('user').add({
		nickname,
		picture,
		openid:opid,
		coin:0,
		isFirstRegister:"false"	
	})	
	return result;
	}
};

	
	
	

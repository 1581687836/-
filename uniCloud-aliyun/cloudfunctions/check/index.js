'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {info,opid}=event;
	if(info=='ck'){
		let res=await db.collection('roleInfo').where({
			openid:opid
		}).get()
		return res;
	}
};

'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {	
	if(event.info=='zc'){
		const {info,opid,age,yourschool,yourmajor,applyschool,applymajor,totalscore,politics,english,math,majorcourse}=event;
		let res=await db.collection('roleInfo').where({
			openid:opid
		}).get()
		if(res.data.length>0){
			return 'okkkkkkkk';
		}
		else{
		let result=await db.collection("roleInfo").add({
			openid:opid,
			age,
			yourschool,
			yourmajor,
			applyschool,
			applymajor,
			totalscore,
			politics,
			english,
			math,
			majorcourse
		})
		return result;
		}
	}
	if(event.info=='xg'){
		const {info,opid,age,yourschool,yourmajor,applyschool,applymajor,totalscore,politics,english,math,majorcourse}=event;
		let res=await db.collection('roleInfo').where({
			openid:opid
		}).get()
		if(res.data.length>0){
			let result=await db.collection("roleInfo").update({
				openid:opid,
				age,
				yourschool,
				yourmajor,
				applyschool,
				applymajor,
				totalscore,
				politics,
				english,
				math,
				majorcourse
			})
			return result;
		}
		}
};

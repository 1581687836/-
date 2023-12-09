'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const{info,opid}=event;
	let res=await db.collection('user').where({
		openid:opid
	}).get()
	console.log(res.data);
	console.log(res.data[0]);
	console.log('好哒');
	if(info=='index'){
		if(res.data.length>0){
			if(res.data[0].lastLoginDate===getCurrentDate()){
				return res;
			}
			else{
				let user1 = res.data[0];
				let coin = user1.coin;
				let res2=await db.collection('user').where({
					openid:opid
				}).update({
					coin:coin+10,
					lastLoginDate:getCurrentDate()
				})
				return res;
			}
			
		}
		else{
			return '用户不存在';
		}
		
	}
	if(info=='help'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='renwu'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='tuijian'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='renwuFirstRigister'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='search'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='register'){
		let result=await db.collection('user').where({
			openid:opid
		}).get()
		return result;
	}
	if(info=='zcchangecoin'){
		let res4=await db.collection('roleInfo').where({
			openid:opid
		}).get()
		if(res4.data.length>0){
			return 'o';
		}
		else{	
			let res5=await db.collection('user').where({
				openid:opid
			}).get();
			console.log(res5.data);
			if(!res5.empty)
			{
				let user1 = res5.data[0];
				let coin = user1.coin;
				let res3=await db.collection('user').where({
					openid:opid
				}).update({
					coin:coin+100,
					isFirstRegister:'true'
				})
				let result=await db.collection('user').where({
					openid:opid
				}).get()
				return result;
			}
			else{
				return 'null';
			}
			
		}
	}
			
};
function getCurrentDate(){
	const date=new Date();
	const year=date.getFullYear();
	const month=date.getMonth()+1;
	const day=date.getDate();
	return `${year}-${month<10?'0'+month:month}-${day<10?'0'+day:day}`;
}

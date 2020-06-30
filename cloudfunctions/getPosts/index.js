// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

//Get post from DB
exports.main = async (event, context) => {
  return await db.collection("posts").where({}).get();
}


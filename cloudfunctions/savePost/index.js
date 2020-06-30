// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//Reference to DB
const db = cloud.database();

//Save post to DB
exports.main = async (event, context) => {
  db.collection("posts").add({
    data: {
      content: event.content,
      votes: 0
    }
  })
}
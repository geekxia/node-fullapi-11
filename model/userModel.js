var mongoose = require('mongoose')

// 使用mongoose.model('集合名称', Schema模式) 返回一个 Model实例
// 在 Model实例上有许多增删改查的方法
module.exports = mongoose.model('users', new mongoose.Schema({
  username: String,
  password: String,
  create_time: Number
}))

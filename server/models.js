var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/restfull_db');

var TaskSchema = new mongoose.Schema({
   title:String,
   description:{type:String ,default:''},
   completed:{type:Boolean , default:false}
  },{timestamps: true});

module.exports = mongoose.model('Task',TaskSchema);

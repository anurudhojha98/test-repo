const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  role_name:String,
  userId:{ type: Schema.Types.ObjectId, ref: 'Users' }

});

const UserRole = mongoose.model('UserRole', userRoleSchema);
module.exports=UserRole;
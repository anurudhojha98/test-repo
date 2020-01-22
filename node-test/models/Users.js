const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require('bcryptjs');
const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userName:{
      type:String,
      required: true
  },
  email:{
        type:String,
        required: true,
        unique:true
  },
  password:{
    type:String,
    required: true,
  },
});

userSchema.pre('save', function (next) {
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.hash(user.password,10, (err, hash) => {
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});
const User = mongoose.model('User', userSchema);
module.exports=User;
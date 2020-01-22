const User=require('../models/Users');
const UserRole=require('../models/Users_Roles')
const mongoose=require('mongoose')
module.exports={

    async isFirstUser(){
        let user=await User.find({});
        if(user){
            return false;
        }else{
            return true;
        }
    },
    async saveUser(userDetails){
        let newUserRole='member';
        let isFirstUsr=await this.isFirstUser();
        if(isFirstUsr){
            newUserRole='admin';
        }
        const user=new User({
        _id: new mongoose.Types.ObjectId(),
         userName: userDetails.userName,
         email: userDetails.email,
         password:userDetails.password
        })
        let newUser = await user.save();
        if(newUser){
            const userRole=new UserRole({
                _id: new mongoose.Types.ObjectId(),
                role_name:newUserRole,
                userId:user._id
              })
            let userRoleDetails=await userRole.save();
            if(userRoleDetails){
              return newUser;
            }else{
                throw new Error('Error in save user roles')
            }
        }else{
            throw new Error('Error in save user.')
        }
    }
}
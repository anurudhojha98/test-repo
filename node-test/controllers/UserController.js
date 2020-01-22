const userService=require('../services/userService')
module.exports = {
    userRegistration(req, res) {
        try{
            const userDetails=req.body;
            userService.saveUser(userDetails).then((user)=>{
              if(user){
                res.status(201).json({
                    success:true,
                    res:user
                })
              }
            }).catch((err)=>{
                res.status(500).json({
                    success:false,
                    err:err.message
                })
            });
        }catch(err){
         res.status(500).json({
             success:false,
             err:err.message
         })
        }

    }

}
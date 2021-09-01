const express=require('express');
const router=express.Router();

//@route GET api/users
//@desc Get logged in user
//@access Private
//get the user which already sign up
router.get('/',(req,res)=>{
    res.send('get logged in user');
})
//@route POST api/users
//@desc Auth user & get token
//@access Private
//sign up the new user.
router.post('/',(req,res)=>{
    res.send('Log in user');
})
module.exports=router;
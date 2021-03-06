const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')


//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
// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:"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"
//     }
// }))

router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body 
    if(!email || !password || !name ){
       return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new User({
                  email,
                  password:hashedpassword,
                  name,
                  pic
              })
      
              user.save()
              .then(user=>{
                  transporter.sendMail({
                      to:user.email,
                      from:"no-reply@insta.com",
                      subject:"signup success",
                      html:"<h1>welcome to instagram</h1>"
                  })
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
  })

  router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
               // res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,followers,following,pic} = savedUser
                res.json({token,user:{_id,name,email,followers,following,pic}})
            //res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router
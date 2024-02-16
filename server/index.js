const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./models/User.js')

const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(cookieParser())

//connect mongoose
mongoose.connect('mongodb://localhost:27017/registration');
app.get('/login', (req, res) => {
    res.redirect('/login');
  });

app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        UserModel.create({name,email,password:hash})
        .then(user=>res.json("success"))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))
})



app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
          bcrypt.compare(password,user.password,(err,response)=>{
            if(response){
                const token = jwt.sign({email:user.email,rolw:user.role},
                    "jwt-secret-key",{expiresIn:'1d'})
                    res.cookie('token',token)
                    return res.json({status:"success",role:user.role})
            }else{
                return res.json("the password is incorrect")
            }
          })  
        }else{
            return res.json("No record found")
        }
        
    })
})
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})
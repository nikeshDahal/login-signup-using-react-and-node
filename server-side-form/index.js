import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//configuration for node
const app =express()
app.use(express.json())
app.use(express.urlencoded ())
app.use(cors())
//configuation ended

//to connect database
mongoose.connect('mongodb://localhost:27017/userLoginRegistrationDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
});
//connect database ended

//1.routes

app.post("/login",(req,res)=>{
    // res.send("this is login api");
    const{name,email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({
                    message:"login sucessful",
                    user:user
                })
            }else{
                res.send({message:"password not matched"})
            }
        }else{
            res.send({
                message:"user not found in DB , do Register",
                err
            })
        }
    })


});

app.post("/register",(req,res)=>{
    // res.send("this is register api");
    // console.log(req.body);
    const{name,email,password, reEnterPassword}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})
        }else {

            const user=new User({
                name,
                email,
                password
            })
            user.save(error=>{
                if(error){
                    res.send(error);
                }else{
                    res.send({
                        message:"sucessfully registered,please login now"
                    })
                }
                
            });


        }
    })
    
});

app.listen(9002,()=>{
    console.log("listening  at port 9002")
})

//routes ended

//schemas for databases>> for mongo db , first create schemas and then create model of it.

const userSchemas=mongoose.Schema({
    name:String,
    email:String,
    password:String
});
//schemas ended

//models 
const User =new mongoose.model("User",userSchemas);








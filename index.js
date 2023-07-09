const express = require("express");
const app = express();

const middleware1 = (req,res,next) =>{
    // res.send("I am Middleware...!!")   //we can't send res in middleware bcz we can give only one response .
    console.log("Middleware1");           // SO when we give re in middleware, it will not show data of routes, we can only able to see res of middleware
    next();
}
const middleware2 =(req,res,next)=>{
    console.log("Middleware2");
    next();
}

app.use(middleware1);//this is the way to passing middleware to all routes 


app.get("/login",(req,res)=>{
    console.log("middleware1-->Login User");
    res.send("<h1>Login User</h1>")
})

app.get("/signup",(req,res)=>{
    console.log("middleware1-->SignUp User");
    res.send("<h1>SignUp User</h1>")
})

app.get("/home",middleware2,(req,res)=>{//this is the way to pass middleware to particular route
    console.log("middleware1-->Homepage");
    console.log("middleware2-->Homepage");
    res.send("<h1>Homepage</h1>")
})

app.get("/about",middleware2,(req,res)=>{
    console.log("middleware1-->About Me");
    console.log("middleware2-->About Me");
    res.send("<h1>About Me</h1>")
})

app.listen(3000,()=>{
    console.log("Middleware is running...!");
})
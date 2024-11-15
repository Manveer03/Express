const express = require("express");

const app =express();

// app.use((req,res)=>{
//     console.log("We Got A New Request !!!!")
//     // res.send("Hello, We got your reques!!!!!!!!!")
//     res.send({color:'red'})
// })

app.get('/',(req,res) =>{
res.send("Welcome to our home page!!!! Cutie")
})
app.get('/dogs',(req,res) =>{
    res.send("Cool!!!!")
    })
    
app.get('/cats',(req,res) =>{
    res.send('MEOW')
})

// we also have post 
app.post('/cats',(req,res) =>{
    res.send('MEOW')
})
// params example 
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1> Browsing the ${subreddit} Subreddit</h1>`)
})
// query string

app.get('/search',(req,res) =>{
const {q} = req.query;
if(!q){
    res.send('Nothing found if you nothing serach!')
}
res.send(`<h1>Serach result for: ${q}</h1>`)
})
// for everthing we can use * Note - we have to use this at end if we use it at start this is running without looking at other routes 
app.get('*',(req,res)=>{
    res.send("I'm route for you if search anything that is not mentioned in code !!!!")
})

app.listen(3000,() =>{
    console.log("Hiiiiiiiii Im here")
})
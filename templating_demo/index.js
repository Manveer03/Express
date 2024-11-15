const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');// we need to make a new directory views in docs it's written with set we need to a directory named views and ejs file inside it 
const redditData = require('./data.json'); // make a new file json in templating demo 

//app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) =>{
    res.render('home.ejs');
})


app.get('/cats',(req,res)=>{
 const cats = [
    'Blue','Rocket','Monty','Tommy','Sherry'
 ]
 res.render('cats',{cats})
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit',{...data});
    }else{
        res.render('notfound',{subreddit})

    }
  
    
})

app.get('/rand',(req,res) =>{
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random.ejs',{num});
})


app.listen(3000,()=>{
    console.log("LISTENSING ON PORT 3000");
})
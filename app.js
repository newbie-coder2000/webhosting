const express= require('express');
const app= express();
const path=require('path');
const hbs= require('hbs');
const port=8000;

app.set('view engine','hbs');
app.set('views','Templates/views');
app.use('/static', express.static('static'));
hbs.registerPartials('Templates/partials');

app.get('/',(req,res)=>
{
    res.render('index');
});
app.get('/about',(req,res)=>
{
    res.render('about');
});

app.listen(port,()=>
{
    console.log("Server Started on port"+port);
})
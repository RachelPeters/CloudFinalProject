const express = require('express')
const port=8000
const app=express()
const path= require('path');
app.use('/css',express.static(__dirname +'/pages/css'));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname + '/pages/index.html')))
app.get('/profile',(req,res)=> res.sendFile(path.join(__dirname + '/pages/Profile_Page.html')))

app.listen(port, () => {
  console.log('We are live on ' + port);
});

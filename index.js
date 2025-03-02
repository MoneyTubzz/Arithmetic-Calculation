const express = require('express');
const app = express();
const {add, sub, div, mul} = require('./arithmeticFunctions');


//local Server
app.listen(2025, function(){
console.log("Server online");
});

app.post('/calculate', (req,res) => {
  

});
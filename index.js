const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');

app.use(express.urlencoded({ extended: true }));

//3.) set up local Server
app.listen(2025, function(){
console.log("Server online - Port #2025");
});


//Post Route
app.post('/calculate', (req,res) => {

    const { operation } = req.body;
    let value_1 = parseFloat(req.body.value_1);
    let value_2 = parseFloat(req.body.value_2);

    const operations = {
        add: "Addition",
        sub: "Subtraction",
        mul: "Multiplication",
        div: "Division"
    };

    const result = arithmeticFunctions[operation](value_1,value_2);

    //Print results to console
    console.log(`Operation: ${operations[operation]}.`);
    console.log(`Value 1: ${value_1}`);
    console.log(`Value 2: ${value_2}`);
    console.log(`Result: ${result}`);
    
    //send result back to Postman (as plain text)
    res.status(200).send(`Operation: ${operations[operation]}.\nValue 1: ${value_1}\nValue 2: ${value_2}\nResult: ${result}`);
});
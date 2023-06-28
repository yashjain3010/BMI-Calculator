const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1/(num2*num2);
result=Number.parseFloat(result.toFixed(2));
    res.send("The result of the Calculation is " + result);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
var express = require('express');
var server = express();

var ejs = require('ejs');
server.set('views',__dirname+ "/public");
server.engine('html', ejs.renderFile);
server.set('view engine',ejs);

server.use(express.static(__dirname+ "/public"));


var bparser = require("body-parser");
server.use(bparser.json());

server.get('/',function(req, res){
    res.send("hello there!");
});


server.get('/about',function(req,res){
    res.render('about.html');
});

server.get('/admin',function(req,res){
    res.render("admin/admin.html");
});

server.get('/index',function(req,res){
    res.render("index.html");
});

var data = [];


server.post('api/items', function(req,res){
    var item = req.body;
    if(!item.price){
        res.status(400);
        res.send("Price Required for Item");
    }
    else{

    Data.push(item);
    item.id = cnt;
    cnt+= 1;
    
    item.status = 'saved';
    
    res.status(201);
    res.json(item);
    }
    

});

server.get('/test/1',(req,res)=>{

    var nums = [81,3,1,543,-2,53,-28,897123,1,2,-9487745, 99];
    var greatest=0;
    
    nums.forEach(iterate);

    function iterate(x){
        if(greatest<x)greatest = x; return greatest;
    


    }
    res.send("Problem 1 results: "+greatest);
    
        
   
    
});

server.listen(8080, function(){
    console.log("Server running at http://localhost:8080");
});


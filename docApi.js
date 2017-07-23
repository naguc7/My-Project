
var express=require("express");
var app=express();

var MongoClient = require('mongodb').MongoClient
 
// Connection URL
var mongoURL = 'mongodb://admin:admin123@localhost:27017/admin'
//var url = 'mongodb://localhost:27017/myproject';

const util = require('util')

var bodyParser = require('body-parser')
app.listen(5050)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//admin login
app.get("/adminlogin",function(req,res){
	console.log("In admin login page")
 //console.log(req.query.adminUsername)
 //console.log(req.query.adminPassword)
 //res.send("admin login details recieved")
 
	if(req.query.adminUsername=='admin' && req.query.adminPassword=='admin'){
		res.send("valid")
	}
	else{
		res.send("invalid")
	}

})

//doctor login
app.get("/doctorlogin",function(req,res){
	console.log("In doctor login page")
 console.log(req.query.drloginUsername)
 console.log(req.query.drloginPassword)
 
 MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("doc_data")
coll.findOne({"username":req.query.drloginUsername, "password":req.query.drloginPassword},function(err,doc){
	if(doc){
		res.send(doc);
		console.log(doc);
	}
	else if(err){
		res.send("doctor login unsuccessful");
		console.log("doctor login unsuccessful");
	}
	else{
		res.send("wrong credentials");
		console.log("wrong credentials");
	}
})
 
 })

})

//doctor registration
app.get("/doctorregistration",function(req,res){
//console.log(obj)


MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("doc_data")
var obj = {"username":req.query.drregUsername,"password":req.query.drregPassword,"fullname":req.query.drfullname,"specialization":req.query.drspecialization,
"MobileNumber":req.query.dmbn,"Age":req.query.drage,"Gender":req.query.drgender}
coll.findOne({"username":obj.username},function(err,doc){
	if(doc){
		res.send("username already exists, please try with another one");
		console.log("username already exists, please try with another one");
	}
	else{
		coll.insert(obj,function(inerr,indoc){
			if(indoc){
				res.send("sucess");
				console.log("doctor details successfully inserted");
			}
		})
	}
})
 
//  
});
 
})

//patient login
app.get("/patientlogin",function(req,res){
	console.log("In patient login page")
 var ptusernam = req.query.ptloginUsername;
 var ptpwd = req.query.ptloginPassword;
 
 MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("pat_data")
coll.findOne({"ptusername":req.query.ptloginUsername, "ptpassword":req.query.ptloginPassword},function(err,doc){
	if(doc){
		res.send(doc);
		console.log("doctor login successful");
	}
	else if(err){
		res.send("patient login unsuccessful");
		console.log("doctor login unsuccessful");
	}
	else{
		res.send("wrong credentials");
		console.log("wrong credentials");
	}
})
 
 })

})

//patient registration
app.get("/patientregistration",function(req,res){
//console.log(obj1)

MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("pat_data")
var obj1 = {"ptusername":req.query.ptregUsername,"ptpassword":req.query.ptregPassword,"fullname":req.query.ptfullname,"MobileNumber":req.query.pmbn,"Age":req.query.ptage,"Gender":req.query.ptgender}
coll.findOne({"ptusername":obj1.ptusername},function(err,doc){
	if(doc){
		res.send("username already exists, please try with another one");
		console.log("username already exists, please try with another one")
	}
	else{
		coll.insert(obj1,function(inerr,indoc){
			if(indoc){
				res.send("patient details successfully inserted");
				console.log("patient details successfully inserted")
			}
		})
	}
})
 
//  
});

})


app.get('/home1',function(req,res){
MongoClient.connect(mongoURL, function(err, db) {
 console.log("Connected correctly to server");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("pat_data")
coll.find().toArray(function(err,docs){
//console.log(docs)
res.send(docs)
db.close();
})
//  
});
	
})



app.get('/home2',function(req,res){
MongoClient.connect(mongoURL, function(err, db) {
 console.log("Connected correctly to server");
var dataBase=db.db("Jaint")
var coll=dataBase.collection("doc_data")
coll.find().toArray(function(err,docs){
//console.log(docs)
res.send(docs)
db.close();
})
//  
});
	
})

const express = require("express");
const path = require ("path");
const router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT ||5000;
app.use('/static', express.static(__dirname + '/public'));
app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.listen(PORT, function(){


    console.log(`Server started on port ${PORT}`);
});


connectToMongoDB();
var dbo;





//post an order to MongoDB database
app.post('/api/looney', function (req, res){
 

     
  
  
      var myObj = req.body;
      
      dbo.collection("Orders").insertOne(myObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        
      
      });
  
  
});


//getAllOrders from MongoDb database
app.get('/api/looney', function (req, res){
  
 
   
   
   
       
   
   
       
       var myObj = req.body;
       
       dbo.collection("Orders").find({}).toArray(function(err, result) {
         if (err) throw err;
         res.json(result);

         
       });
   
   
 });

 app.post('/api/orders/username', function (req, res){
  console.log("tu sam");
  var myObj = req.body;
  console.log(myObj);
  var myquery = {username : myObj.username
                   };
  
  
  
  dbo.collection("Orders").find(myquery, { projection: { _id: 0, orderId: 1 } }).toArray(function (err, result){
  if (err) throw err;
  res.json(result);



  });

 });

 app.post('/api/users', function (req, res) {
  var myObj = req.body;
  
  var myquery = {username : myObj.username,
                  password : myObj.password };
  
  
  
  dbo.collection("users").find(myquery).toArray(function (err, result) {

    if ( result[0]== undefined){

        res.send(false);
    }

    else {

      res.send(true);
      var myquery1 = {username : myObj.username,
        password : myObj.password };

      var date1 = date();
      console.log(date1);
      var newvalues1 = { $push: { loginTime: date1 }};
      
      
      dbo.collection("users").update(myquery1, newvalues1 , function(err, res) {
        if (err) {throw err;}

        else{

        console.log("Updated!");}

      });
      
      }

      });

  
});

app.post('/api/users/logout', function (req, res) {
  var myObj = req.body;
  
  
      var myquery1 = {username : myObj.username
         };

      var date1 = date();
      
      var newvalues1 = { $push: { logoutTime: date1 }};
      
      
      dbo.collection("users").update(myquery1, newvalues1 , function(err, res) {
        if (err) {throw err;}

        else{

        console.log("Updated!");}

      });
      
      

      });

  


app.post('/api/looney/userdata', function (req, res) {
  var myObj = req.body;
  
  var myquery = {username : myObj.username
                   };
  
  
  
  dbo.collection("users").find(myquery, { projection: { _id: 0, loginTime: 1 } }).sort({loginTime: -1}).toArray(function (err, result) {
     
     if (err) throw err;
         res.json(result);
      
      

      });

  
});




 let a;
 //getLatestOrderId number from MongoDB database
 app.get('/api/looney/orderid', function (req, res){
  
       dbo.collection("Orders").find({}).sort({orderId:-1}).limit(1).toArray(function (err, result) {
         if (err) throw err;
        
         result.forEach(function(id){
           a = id.orderId;
            console.log(a);
         })
         res.send(a + "");
                 
       });
       
    });

    app.post ('/api/looney/updateorderstatus', function (req, res){
       var myObj = req.body;
      console.log(myObj);
      var myquery = {orderId : parseInt(myObj.orderId) };
      var newvalues = { $set: {status: "Completed", paymentMethod: myObj.paymentMethod  } };
      console.log(myquery);
      
      dbo.collection("Orders").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("Status updated");
        
      
      });
      
   });

  


   /*app.post('/api/users', function (req, res){
 

       console.log("u metodi sam");
    var myObj = req.params("username");
    console.log(myObj);
    
    /*dbo.collection("users").insertOne(myObj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      
    
    });


});*/



/*app.get('/', function (req, res){
            res.sendFile(path.join(__dirname, "public", "index.html"));*/



//connect to MongoDB database
function connectToMongoDB(){
  
  MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) {throw err;}
  
      else {
  
  
      database=db;
      dbo = db.db("dajanBaza");}

});

};

function date (){

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;

}

   //primjer mysql konekcije
/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'dajanova_baza'
  })
  
  connection.connect()
  
  connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) {throw err;}

    else{
            rows.forEach(function(row){
                console.log(row.Name);

            })
        
  
    }
  })
  
  connection.end()*/
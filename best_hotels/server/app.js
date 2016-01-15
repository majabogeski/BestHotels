  var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path"),
  morgan = require("morgan"),
  routes = require('./routes');

  app.use('/css',express.static(path.join(__dirname, '../client/css')));
  app.use('/js',express.static(path.join(__dirname, '../client/js')));
  app.use('/images',express.static(path.join(__dirname, '../client/images')));
  app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));
  app.use(morgan('tiny'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/api/hotels/', routes.hotels);
  app.use('/api/auth/', routes.auth);


  //on the bootom
  app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
  });

  app.listen(3000, function(){
    console.log("Server starting on port 3000");
  });
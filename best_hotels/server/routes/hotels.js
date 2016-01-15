var express = require('express');
var router = express.Router();
db = require("../models");

//INDEX GET /api/hotels/
router.get('/',function(req,res){
  db.Hotel.find(
        { $text : { $search : req.query.destination } }, //http://stackoverflow.com/questions/24714166/full-text-search-with-weight-in-mongoose
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, hotels) {
        console.log(hotels);
        res.status(200).send(hotels);
    });
});
// router.post('/',function(req,res){
//   db.Hotel.create(req.body,function(error){
//     if (error) return res.json({error:error.message});
//     res.json({ message: 'Hotel created!' });
//   });
// });

//CREATE POST /api/hotels/
router.post('/',function(req,res){
  console.log("hello");
  console.log("THIS IS REQ BODY!", req.body);
  db.Hotel.create(req.body,function(error, hotel){
    if (error) return res.status(400).send({error:error});
    //201 statu crated
    console.log('IT WORKS!');
    res.status(201).send(hotel);
  });
});

//GET SHOW /api/hotels/:id
router.get('/:id', function(req,res){
  db.Hotel.findById(req.params.id, function(err, hotel){
    res.send(hotel);
  });
});
//UPDATE PUT /api/hotels/:id
router.put('/:id', function(req,res){
  db.Hotel.findByIdAndUpdate(req.params.id, req.body, function(err,hotel){
    //200 status is ok
    res.status(200).send(hotel);
  });
});
router.delete('/:id', function(req,res){
  db.Hotel.findByIdAndRemove(req.params.id, function(err,hotel){
    res.status(200).send(hotel);
  });
});
module.exports = router;
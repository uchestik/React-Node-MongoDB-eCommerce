var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

// importing models
var Products = require('./models/products')


mongoose.connect('mongodb://localhost/v1project');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.get('/api', function(req,res){
    Products.find({}, function(err,products){
        if(err){
            console.log(err);
        } else{
            res.json(products)
        }
    })
});


app.get('/api/search', function(req,res){
    var name = req.query.name;
    var category = req.query.category;
    var sex = req.query.sex;
    Products.find({$or:[{name:name},{category:category},{sex:sex}]}, function(err,products){
        if(err){
            console.log(err);
        } else{
            res.json(products)
        }
    })
});

app.get('/api/find/:productId', function(req,res){
    Products.findById(req.params.productId, function(err,product){
        if(err){
            console.log(err);
        } else{
            res.json(product)
        }
    })
});

app.put('/api/edit/:productId', function(req,res){
    Products.findByIdAndUpdate(req.params.productId,req.body,function(err,editedProduct){
        if(err){
            console.log(err);
        }else{
            res.json(editedProduct)
        }
    })
});



app.post('/api', function(req,res){
    var name = req.body.name;
    var sex = req.body.sex;
    var manufacturer = req.body.manufacturer;
    var image = req.body.image;
    var description= req.body.description;
    var category = req.body.category;
    var size = req.body.size;
    var newProduct = {name:name,sex:sex,manufacturer:manufacturer,
        image:image,description:description,category:category,size:size};

    Products.create(newProduct, function(err, product){
        if(err){
            console.log(err);
        }else{
            res.json(product)
        }
    });
});






app.listen(3000);
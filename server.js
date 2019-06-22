const express = require('express');
const db = require('./models');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send('everything is working!');
})



// Make your model!
//sequelize model:create --name pedal --attributes make:string,model:string,type:string,serialnumber:string,note:string
// Run the migrations
// sequelize db:migrate
// Create one record route
app.post('/pedals', function(req, res) {
    db.pedal.create({
        make: req.body.make,
        model: req.body.model,
        type: req.body.type,
        serialnumber: req.body.serialnumber,
        note: req.body.note
    }).then(function(data){
        console.log(data);
        res.json(data);
    });
});
// Read one record route
app.get('/pedals/:id', function(req, res) {
    db.pedal.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(pedal) {
        res.json(pedal);
    })
});
// Read ALL records route
app.get('/pedals', function(req, res) {
    db.pedal.findAll().then(function(pedals) {
        res.json(pedals);
    })
});
// Update ONE record route
app.put('/pedals/:id', function(req, res) {
    db.pedal.update({
        make: req.body.make,
        model: req.body.model,
        type: req.body.type,
        serialnumber: req.body.serialnumber,
        note: req.body.note
    },{
        where: {id: parseInt(req.params.id)}
    }).then(function(count) {
        res.json(count)
    });
});
// Delete ONE record route
app.delete('/pedals/:id', function(req, res) {
    db.pedal.delete({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});
// 



app.listen(3000, function() {
    console.log('listening to port 3000!');
});
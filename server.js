// Load Express
const express = require('express')
const app = express()
const port = 3000
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')

// MiddleWare
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//  Routes
app.get('/fruits', function(req, res){
    res.render('../views/Fruits/Index', { fruits: fruits });
});    

app.get('/vegetables', function(req, res){
    res.render('../views/Vegetables/Index', { vegetables: vegetables });
});
// # S - Show - Show me this one thing!
app.get('/fruits/:indexOfFruits',(req, res)=>{
    res.render('../views/Fruits/Show', //second param must be an object
    { fruit: fruits[req.params.indexOfFruits] }
    );
})

app.get('/vegetables/:indexOfFruits',(req, res)=>{
    res.render('../views/Vegetables/Show', //second param must be an object
    { vegetable: vegetables[req.params.indexOfFruits] }
    );
})
// Tell express Listen
app.listen(port, () => {
    console.log(`Port: ${port}`);
  });
  
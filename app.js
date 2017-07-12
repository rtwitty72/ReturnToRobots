const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data');
const userController = require('./controllers/user');
const newList = [];

app.use('/', express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('data', data);
});


app.get('/users/:id', function(req, res){
  function findOne(item) {
    return item.id === Number(req.params.id)
  }
  var newList = data.users.find(findOne);
  var context = {model: newList};
  res.render('data', context);
});



app.listen(3000, function() {
  console.log('Succefully started express application!');
});

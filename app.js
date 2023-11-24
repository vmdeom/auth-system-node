const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const LocalStorage = require('node-localstorage').LocalStorage;

dotenv.config({ path: './.env'});

if(typeof localStorage === 'undefined' || localStorage === null){
    localStorage = new LocalStorage('./scratch');
}
else{
    console.log("has storage");
}

var isAuth = false;

const port = process.env.PORT;

app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("page", {pageToRender: 'userpage.ejs'});
});

app.get('/register', function(req, res){
    res.render("page", {pageToRender: 'register.ejs'});
});

app.get('/login', function(req, res){
    res.render("page", {pageToRender: 'login.ejs'});
});

app.post('/auth/register', function(req, res){
    console.log(req.body);
});

app.post('/auth/login', function(req, res){
    console.log(req.body);
});

app.listen(port || 3000, 'localhost', function(){
    console.log('listening at port ' + port)
});
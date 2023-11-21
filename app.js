const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const port = process.env.PORT

app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port || 3000, 'localhost', function(){
    console.log('listening at port ' + port)
})
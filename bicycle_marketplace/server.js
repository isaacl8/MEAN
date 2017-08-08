let express = require('express');

let app = express()

let bodyParser = require('body-parser')

let path = require('path')

let session = require('express-session')

app.use(session({secret: 'iamhappys'})); 

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function(req, res){
    res.sendFile(path.resolve('client/dist/index.html'))
})

app.listen('8000', function(){
    console.log('Listening on port 8000')
})
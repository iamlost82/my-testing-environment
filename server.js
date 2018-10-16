const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), function(){
    console.log('Your server is now running at port: ' + app.get('port'));
});
var express = require("express");
var app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

const port = 80;

app.use(express.static('public'))

app.listen(port, () => {
    console.log("Project Assessment Website: running on port " + port);

});

var express = require("express");
var app = express();
const port = 80
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/department", (req, res) => {
    res.json([
        {
            "id": "1",
            "name": "CISO"
        },
        {
            "id": "2",
            "name": "Lending"
        },
        {
            "id": "3",
            "name": "Online Banking"
        },
        {
            "id": "4",
            "name": "Investment Banking"
        }
    ]);
});

app.listen(port, () => {
    console.log("Departments service running on port " + port);
});


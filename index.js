"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let jsonParser = bodyParser.json();
const port = 3000;

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello");
});

app.get("/test", (req, res) => {
    let test = {title: "test"};

    res.status(200).send(test);
})
.post("/test", urlencodedParser, (req, res) => {
    res.setHeader('Content-type', 'application/json');

    if(req.headers["content-type"] !== 'application/json') {
        res.statusCode = 400;
        res.write(JSON.stringify({
            code: 400,
            data: null,
            error: {
                message: 'Bad Request!'
            }
        }));
    } else {
        console.log(req.body);
        res.statusCode = 201;
        res.write(JSON.stringify({
            code: 201,
            data: {
                message: 'success request'
            },
            error: null
        }));
    }
    res.send();
});


app.listen(port, (err) => {
    if(err) {
        console.log("there was a problem", err);
        return;
    }

    console.log(`listening on port ${port}`);
})
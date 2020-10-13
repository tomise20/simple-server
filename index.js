"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello");
});

app.get("/test", (req, res) => {
    let resData = {
        code: 200,
        error: null,
        data: {
            title: "success"
        }
    };

    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify(resData));
    res.send();
})
.post("/test", (req, res) => {
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
        res.statusCode = 201;
        res.write(JSON.stringify({
            code: 201,
            data: req.body,
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
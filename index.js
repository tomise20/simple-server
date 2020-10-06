"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello");
});

app.get("/test", (req, res) => {
    let test = {title: "test"};

    res.status(200).send(test);
});


app.listen(port, (err) => {
    if(err) {
        console.log("there was a problem", err);
        return;
    }

    console.log(`listening on port ${port}`);
})
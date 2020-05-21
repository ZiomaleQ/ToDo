const express = require("express"), app = express(), db = require("./db.js")();

app.use(express.static("frontend/public"));
app.use((req, res, next) => {
    req.db = db;
    next()
})

app.get("/", res.sendFile(__dirname + "/frontend/public/index.html"));

app.listen(25565, () => console.log("słuchanko"))
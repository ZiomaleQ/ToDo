const express = require("express"), router = express.Router();

router.get("/", (req, res) => res.sendFile(__dirname + "/frontend/public/index.html"));

module.exports = router;
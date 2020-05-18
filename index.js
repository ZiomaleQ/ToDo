const express = require("express"), app = express(), router = require("./express_server");
app.use(express.static("frontend/public"));
app.use("/", router)

app.listen(80, () => console.log("słuchanko"))
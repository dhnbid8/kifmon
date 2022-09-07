const express = require('express')
const app = express()

const port = 3000;
const bitcoin = require("./controller/bitcoin");
const balance = require("./controller/balance");
const tron = require("./controller/tron");

app.use("/tron", tron);
app.use("/bitcoin", bitcoin);
app.use("/balance", balance);

app.listen(port, () => console.log(`wallet app is runing in port ${port}`));

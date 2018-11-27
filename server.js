const express = require("express");
const items = require('./cart-items-routes.js');
// const rooms = require('./room-routes.js');
const app = express();
const port = 8080;


// pool.query('select * from rooms').then(result => console.log(result.rows));

app.use(express.json());
app.use(express.static('./public'));
app.use("/", items);
// app.use("/rooms", rooms);



app.listen(port, () => console.log(`Server up and running on port: ${port}`));




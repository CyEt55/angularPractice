const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
    console.log('Synced db.');
}).catch((err) => {
    console.log("Failed to sync db:" + err.message);
});

/*app.get("/", (request, response) =>{
    response.json({ message: "Attemting to connect a Angular.js app to a PostgresSQL database." });
});
*/
require('./src/app/routes/product.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log('Server is running on port ${PORT}.');
});

app.get("/", (request, response) => {
    response.json({ message: "Postgres API running." });
  });

/*  without sequelize
    app.get('/products', db.getProducts);
*/
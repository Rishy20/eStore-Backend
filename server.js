//Import Koa
const Koa = require('koa');
//Import body-parser
const bodyParser = require('koa-bodyparser');
//Import the routes
const sellerRoutes = require('./routes/seller.routes');
const productRoutes = require('./routes/product.routes');

//Import cors
const cors = require('@koa/cors');



//Start app
const app = new Koa();
//Use BodyParser
app.use(bodyParser());

//Use cors
app.use(cors());

//Registering the Seller routes
app.use(sellerRoutes.routes()).use(sellerRoutes.allowedMethods());
//Registering the Product routes
app.use(productRoutes.routes()).use(productRoutes.allowedMethods());



//Setup the port
app.listen(3000);
console.log("Application is running on port 3000");
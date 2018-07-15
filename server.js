// const connection = require("./config/connection.js");
const express = require("express");
const bodyParser = require("body-parser");
const exprHandbars = require("express-handlebars");
const PORT = process.env.PORT || 8000;
const app = express();

const routes = require("./controllers/burgers__controller.js")


// Provides static content from the "public" dir in app
app.use(express.static("public"));

// parses the application with form URL encoder
app.use(bodyParser.urlencoded({extended: true }));

app.use(bodyParser.json());

// lays out default view for handlebars 
app.engine("handlebars", exprHandbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost ${PORT}`);
});




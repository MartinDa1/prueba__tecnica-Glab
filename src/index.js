const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const req = require("express/lib/request");

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    // partialsDir son pequeñas partes de html que podemos reutilizar en cualquier vista
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "caractersecreto",
    resave: true,
    saveUninitialized: true,
  })
);

// global variables

// routes
app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// server is listenning
app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});

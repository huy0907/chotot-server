const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync()
app.get("/", (req, res) => {
  res.json({ message: "Welcome to app mobile application." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// require("./app/routes/news.routes.js")(app);
// require("./app/routes/banner.routes.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
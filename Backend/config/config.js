var mongo = require("mongoose");

var db = mongo.connect(
  "mongodb+srv://quickai:quickai@cluster0.fygoyj1.mongodb.net/flights?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, response) {
    if (err) {
      console.log("Failed to connect to " + db);
    } else {
      console.log("Connected to akshat " + db, " + ", response);
    }
  }
);

module.exports = db;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const eventRoutes = require("./routes/event");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(eventRoutes);

mongoose
  .connect(
    'mongodb+srv://Tanmay:QtLU0fdowImBSBLj@cluster0.t3bpoqj.mongodb.net/sellular?retryWrites=true&w=majority'
  )
  .then((result) => {
    console.log("Server running on port 8000");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

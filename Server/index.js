const express = require("express");
const connecttomongo = require("./db");
const bodyParser = require("body-parser");
connecttomongo();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 5000;

const allowedOrigins = [process.env.FRONTEND_ORIGIN];
// cors
console.log(process.env.FRONTEND_ORIGIN);
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly list all allowed methods
    maxAge: 86400, // Cache preflight responses for 24 hours
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/profileImage", express.static(path.join(__dirname, "profileImages")));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/job"));

app.listen(port, () => {
  console.log(`connected to port localhost:${port}`);
});

const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT;
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const cors = require("cors")
// connect to database
connectDB();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin:"https://yoxoevents.onrender.com",
  credentials:true
}
app.use(cors(corsOptions))
// routes
app.use("/auth", require("./routes/auth"));

// ERROR HANDLINg
app.all("*", express.static(path.join(__dirname, "public")));
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ERROR.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

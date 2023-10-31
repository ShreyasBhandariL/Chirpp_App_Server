const express = require("express");
const cors = require("cors");
const connectDB = require("./db_connect");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 6000;
//database connection
connectDB();
//middlewares
app.use(express.json());
app.use(cors());
app.use("/user", require("./Routes/user_application"));
app.use("/admin", require("./Routes/admin_panel"));

app.listen(PORT, () => {
  console.log(`server running @ ${PORT}`);
});

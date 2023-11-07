const express = require("express");
const cors = require("cors");
const connectDB = require("./db_connect");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 6000;
//database connection
connectDB();
//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
app.use("/user", require("./Routes/user_application"));
app.use("/admin", require("./Routes/admin_panel"));
app.use("/media", express.static("./Media"));

app.listen(PORT, () => {
  console.log(`server running @ ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./db_connect");

const app = express();
const port = 6000;
//database connection
// connectDB();
//middlewares""
app.get("/", (req, res) => {
  res.status(200).json({ message: "well come to chirrp app" });
});
app.use(express.json());
app.use(cors());
app.use("/user", require("./Routes/user_application"));
app.use("/admin", require("./Routes/admin_panel"));

app.listen(port, () => {
  console.log(`Server running @ ${port}`);
});

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const connectDb = require("./config/db");

dotenv.config();
//db connection
connectDb();
//rest object

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//route

//URL localhost
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to food Server</h1>");
});

//PORT
const PORT = process.env.PORT || 8081;
0;
//listen
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`.bgCyan);
});

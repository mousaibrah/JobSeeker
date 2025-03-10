const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;
const roleRouter = require("./routes/role");
const userRouter = require("./routes/users");
const postRouter = require("./routes/post");
const emailRouter = require("./routes/email");
const profileRouter = require("./routes/profile");
const Admin = require("./routes/createAdmin");
const adminController = require("./routes/adminController");
app.use(cors());
app.use(express.json());
app.use("/roles", roleRouter);
app.use("/email", emailRouter);
app.use("/admin", Admin);
app.use("/dashBoard", adminController);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/profile", profileRouter);
// Error Handler
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

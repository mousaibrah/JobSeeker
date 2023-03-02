const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;
const roleRouter = require('./routes/role');
const userRouter = require("./routes/users");
const postRouter = require("./routes/post");
const profileRouter = require("./routes/profile");
app.use(cors());
app.use(express.json());
app.use('/roles',roleRouter)
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/profile',profileRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

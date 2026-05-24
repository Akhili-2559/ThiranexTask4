const express = require("express");
const cors = require("cors");

const app = express();

require("./database");

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

const PORT = 7100;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
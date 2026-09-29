require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/users.routes");
const packageRoutes = require("./routes/packages.routes");
const contactRoutes = require("./routes/contact.routes");
const noticeRoutes = require("./routes/notice.routes");
const uploadRoutes = require("./routes/upload.routes");
const emailRoutes = require("./routes/email.routes");
const destinationRoutes = require("./routes/destinationRoutes");
const countriesRoutes = require("./routes/Countries,routes");
const statesroutes = require("./routes/States.routes");



const app = express();
app.set("trust proxy", 1); // add this

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, "uploads");


app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
  })
);
app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static(UPLOAD_DIR));

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use("/api/packages", packageRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/notice", noticeRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/states", statesroutes);
// Multer / generic error handler
app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    return res.status(400).json({ error: err.message || "Something went wrong" });
  }
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Tripist Admin API running on http://localhost:${PORT}`);
});

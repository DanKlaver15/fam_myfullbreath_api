const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const users = require("./routes/users");
const auth = require("./routes/auth");
const centers = require("./routes/centers");
const verifyEmail = require("./routes/verifyEmail");
const passwordReset = require("./routes/passwordReset");
const analytics = require("./routes/analytics");
const onboarding = require("./routes/onboarding");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/onboarding", onboarding);
app.use("/api/centers", centers);
app.use("/api/verifyEmail", verifyEmail);
app.use("/api/resetPassword", passwordReset);
app.use("/api/analytics", analytics);
app.use(express.static("data"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

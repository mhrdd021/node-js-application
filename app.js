const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

const ShopRoutes = require("./routes/Shop");
const AdminRoutes = require("./routes/Admin");

app.use("/admin", AdminRoutes);
app.use(ShopRoutes);

app.listen(port, () => {
  console.log(`App Listening on Port ${port}`);
});

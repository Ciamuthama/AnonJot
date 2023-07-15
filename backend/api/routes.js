const app = require("../server");
const route = require("../routes/routes");

app.use("/api/", route);

module.exports = app;

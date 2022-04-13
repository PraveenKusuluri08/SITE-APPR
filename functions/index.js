const functions = require("firebase-functions");
const express = require("express");
const webBuilder = require("./services/FromBuilder/controller");
const app = express();
const cors = require("cors");
const { db, admin } = require("./services/utils/admin");

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/formbuilder", webBuilder);

app.use("/auth", require("./services/Authentication/controller"));

app.use("/employee", require("./services/EmployeeManagment/controller"));

exports.app = functions.https.onRequest(app);

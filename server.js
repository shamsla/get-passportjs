require("dotenv").config();

const express = require("express");
const app = express();
const GithubStrategy = require("./strategies/Github");
const GithubRoute = require("./routes/github");

const { initPassport, useStrategies } = require("./utils");
initPassport(app);

app.get("/success", (req, res) => {
  res.send("success");
});

app.get("/failure", (req, res) => {
  res.send("failure");
});

app.get("/", (req, res) => {
  res.send(`<a href="/google/auth">google</a>`);
});


const PORT = process.env.PORT | 2021;
app.set("port", PORT);
app.listen(app.get("port"), () => console.log("server connected"));
// https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/
// https://www.zflexldapadministrator.com/index.php/blog/82-free-online-ldap

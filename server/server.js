const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", require("./api"));

app.listen(3001, () =>
  console.log(`server listening on http://localhost:3001`)
);

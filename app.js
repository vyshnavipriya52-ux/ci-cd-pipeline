const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("CI/CD Multi Env 🚀");
});

app.listen(3000);

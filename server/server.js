const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use((_, res, next) => {
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(express.static('build'));

module.exports = app;
module.exports.handler = serverless(app);

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });

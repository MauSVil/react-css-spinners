const React = require('react');
const { Ring } = require('react-css-spinners');
const ReactDOM = require('react-dom/server');
const express = require('express');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(React.createElement(Ring));

  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  ${html}
</body>
</html>`);
});

app.listen(port, () => console.log(`listening on port: ${port}`));

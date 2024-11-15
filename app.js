const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a test in AWS environment to test CI/CD full pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

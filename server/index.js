const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server listening to Port ${port}`));
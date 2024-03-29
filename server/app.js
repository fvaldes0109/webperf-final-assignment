const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());
app.use(express.static('dist', ['etag']));

app.listen(3001, () => console.log('Server is running on port 3001'));

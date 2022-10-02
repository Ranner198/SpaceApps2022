const express = require('express')
const app = express()
const path = require('path');
const port = 2581;

app.use('/Assets', express.static('Assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

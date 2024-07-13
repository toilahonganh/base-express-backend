const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('sample.ejs');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
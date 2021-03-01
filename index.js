const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(require('./routes/router'));

app.use(express.static(path.join(__dirname, 'assets')))


app.listen(process.env.PORT || 3000, () => {
    console.log("Server en puerto 3000")
});



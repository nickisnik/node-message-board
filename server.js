const express = require('express');
const app = express();

app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))


const indexRouter = require('./routes/index');

app.use('/', indexRouter)



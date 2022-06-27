const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))


const indexRouter = require('./routes/index');

app.use('/', indexRouter)



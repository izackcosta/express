const express = require('express');
require("dotenv").config();
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});
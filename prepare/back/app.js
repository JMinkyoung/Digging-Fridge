const express = require('express');
require('dotenv').config();
const app = express();
const port = 3065;

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASS}@recipecluster.zsgvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error));

app.get('/', (req, res) => res.send('연결완료'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
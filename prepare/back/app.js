require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
var cookie = require('cookie');
const app = express();
const cors = require('cors');
const { PORT, DB_PASS, M_URL } = process.env;
const mainRouter = require("./routes/routes");

app.use(cors({
    origin: ['http://localhost:3000',`http://${M_URL}:3000`],
    credentials: true,
}));

cookie.setCookie = (res, token) => { res.cookie("access_token", token, { sameSite:'none', secure: true, }); }

mongoose
    .connect(`mongodb+srv://admin:${DB_PASS}@recipecluster.zsgvx.mongodb.net/main?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.log(error));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

app.use('/recipes',mainRouter);


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const { PORT, DB_PASS } = process.env;
const mainRouter = require("./routes/routes");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
mongoose
    .connect(`mongodb+srv://admin:${DB_PASS}@recipecluster.zsgvx.mongodb.net/main?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.log(error));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

app.use('/recipes',mainRouter);


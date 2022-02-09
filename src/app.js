const express = require('express');
const cors = require('cors');
const routes_api = require('./routes/index');
const bodyParser = require('body-parser');
const httpLogger = require('./middleware/httpLogger');
const logger = require('./utils/logger');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(httpLogger);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/v1', routes_api);

app.listen(PORT, () => {
    logger.info(`listening at ${PORT}`);
});
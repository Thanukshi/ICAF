const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config({
	path: './config/config.env',
});
const PORT = process.env.PORT;
//const cors = require('cors');

if (process.env.NODE_ENV === 'development') {
    app.use()
}

const app = express();

app.listen(PORT, () => {
	console.log(`Sever is started on ${PORT}`);
});

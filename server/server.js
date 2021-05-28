const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles: true,
	})
);

//connect to the db
//const URI = "mongodb+srv://ICAF:ICAF1234@cluster0.j9eij.mongodb.net/ICAF?retryWrites=true&w=majority";
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
	useCreateIndex : true,
	useFindAndModify : true,
	useNewUrlParser : true,
	useUnifiedTopology : true,
		
}, err => {
	if(err) throw err;
	console.log("Connected to the mongo")
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log('Server is running on port ', PORT);
});

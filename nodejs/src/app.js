const connectDB = require('./config/connection')
const bodyParser = require('body-parser');
const initWebRoutes = require('./router/web')
const express = require('express');
const User = require('./models/user');
const Course = require('./models/course');
const app = express();
const cors = require('cors');
require('dotenv').config();   // giup chayj dc dong process.env

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Allow all origins
app.use(cors());

// Or, allow only specific origins
app.use(cors({
  origin: 'http://localhost:8080'
}));

connectDB();
initWebRoutes(app)
let port = process.env.PORT || 5000;  //Port === undefined => Port = 6060
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
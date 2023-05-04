const mongoose = require('mongoose')
require('dotenv').config();   // giup chayj dc dong process.env
const url = process.env.URL


const connectDB = async () => {
    try {
      const client = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`Connected to MongoDB: ${client.connection.host}`);
    } catch (e) {
      console.log('Error connecting to MongoDB', e);
        process.exit(1)
    }
  };
module.exports = connectDB;
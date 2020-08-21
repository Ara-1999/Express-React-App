import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from  './routes/api.js'
import 'body-parser';
import bodyParser from "body-parser";
dotenv.config();
const app = express();
// Connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=>console.log("Connected to DB!"));

app.use(bodyParser.json())

//Import routes
app.use('/api',router)

//Port and listen
const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server at ${port} started`))
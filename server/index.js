const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes/userRoute.js')

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());


const port = 8000;
const URL = process.env.MONGO_URL;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


mongoose.connect(URL).then(()=>{
    console.log("MongoDB connected successfully");
}).catch((error)=>console.log(error));

app.use('/api',route)



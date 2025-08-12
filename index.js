const express = require('express');
const app = express();

app.use(express.json());

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
}); 

//mounting the routes
const commentRoute = require('./Routes/route');
app.use('/api/v1', commentRoute);  

const connectDB = require('./config/db');
connectDB();    

const path = require("path");
const express = require("express");

// set up the Express App 
const app = express();
const PORT = process.env.PORT || 3001;
// react does stuff on 3000 for testing so use 3001 

// Middleware 

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello tuesday')
})

app.listen(PORT, () => {
    console.log('listening on PORT ${http://localhost:3001/}')
})
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
const ctrl = require('./controllers')



//middleware
app.use(cors());
app.use(express.json());

app.use(express.static("client"));

// app.get("/styles", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/index.css"));
// });
// app.get("/js", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/index.js"));
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });

app.get('/', (req, res) => {
    res.sendFile('client/index.html');
});

const port = process.env.PORT || process.env.SERVER_PORT;
// const port = process.env.PORT || process.env.SERVER_PORT;

app.get('/login', ctrl.login);
// app.post('/login/id', ctrl.register)



app.listen(port, () => console.log(`Dude, I heard they're about to SERVE some ${port}`));
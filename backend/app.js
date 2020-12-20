const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
const methodOverride = require('method-override')


//routes
const students = require('./routes/allStudents')
const mainlist = require('./routes/mainlist')
const door = require('./routes/door')
const projector = require('./routes/projector')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware & static files
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(cors());
app.use(express.json());

const dbURI = db
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.set('view engine', 'ejs');

app.use('/allstudents', students);
app.use('/mainlist', mainlist);
app.use('/door', door);
app.use('/projector', projector);

app.get('/', (req, res) => {
    res.render('home')
})

app.use((req, res) => {
    res.status(404).send('<h1>404 Page does not exist</h1>')
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
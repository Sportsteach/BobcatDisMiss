const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();

//routes
const students = require('./routes/allStudents')
const mainlist = require('./routes/mainlist')
const door = require('./routes/door')
const projector = require('./routes/projector')

const app = express();

// middleware & static files
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(cors());
app.use(express.json());

const dbURI = db
mongoose.connect(process.env.MONGODB_URI || dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
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

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    })
}
app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
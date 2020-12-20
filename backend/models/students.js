const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    carNumber: {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    teacher: {
        type: String,
        require: true
    },
    siblings: {
        type: String,
        require: false
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
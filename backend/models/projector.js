const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectorSchema = new Schema({
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

const projector = mongoose.model('projector', projectorSchema);
module.exports = projector;
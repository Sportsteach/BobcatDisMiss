
const express = require('express');
const router = express.Router();
const Projector = require('../models/projector');

router.get('/', (req, res) => {

    Projector.find().sort({ $natural: -1 })
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Projector.findByIdAndDelete(req.params.id)
        .then(() => res.json('Student deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
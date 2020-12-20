const express = require('express');
const router = express.Router();
const Door = require('../models/door');

router.get('/', (req, res) => {

    Door.find().sort()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Door.findByIdAndDelete(req.params.id)
        .then(() => res.json('Student deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
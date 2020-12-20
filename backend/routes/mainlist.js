const express = require('express');
const router = express.Router();
const Projector = require('../models/projector');
const Student = require('../models/students');
const MainList = require('../models/mainList');
const Door = require('../models/door');

router.get('/:num', (req, res) => {
    const num = req.params.num

    Student.findOne({ carNumber: num })
        .then(result => {
            const car = {
                carNumber: result.carNumber,
                firstName: result.firstName,
                lastName: result.lastName,
                teacher: result.teacher,
                siblings: result.siblings
            }
            const newMain = new MainList(car)
            const newDoor = new Door(car)
            const newProjector = new Projector(car)

            newMain.save()
            newDoor.save()
            newProjector.save()
        })
        .catch(err => {
            console.log(err);
        })
        .then(result => {
            res.redirect('/mainlist');
        })
        .catch(err => {
            console.log(err);
        });
})

router.get('/', (req, res) => {
    MainList.find().sort({ $natural: -1 })
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/', (req, res) => {
    const mainList = new MainList(result)
    mainList.save()
        .then(result => {
            res.redirect('/mainlist');
        })
        .catch(err => {
            console.log(err);
        });
})

router.delete('/:id', (req, res) => {
    Door.findOneAndDelete({ carNumber: req.params.id })
        .then(result => {
        })
    MainList.findOneAndDelete({ carNumber: req.params.id })
        .then(result => {
        })
    Projector.findOneAndDelete({ carNumber: req.params.id })
        .then(result => {
            res.redirect(`/mainlist`)
        })
        .catch(err => {
            console.log(err);
        });
})
module.exports = router;
const express = require('express');
const router = express.Router();
const Projector = require('../models/projector');
const Student = require('../models/students');
const MainList = require('../models/mainList');
const Door = require('../models/door');

router.get('/', (req, res) => {
    Student.find().sort()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/', (req, res) => {
    Student.find()
        .then(data => {
            const newFamily = {
                carNumber: data.length + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                teacher: req.body.teacher,
                siblings: req.body.siblings
            }
            const student = new Student(newFamily)
            student.save()
                .then(() => res.redirect(`allstudents/yournumber/${student._id}`))
                .catch(err => res.status(400).json('Error:' + err));
        })
})

router.get('/new', (req, res) => {
    res.render('newFamily')
})

router.get('/yournumber/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete', (req, res) => {
    Door.deleteMany({})
        .then(result => {
        })
    MainList.deleteMany({})
        .then(result => {
        })
    Projector.deleteMany({})
        .then(result => {
            res.redirect(`/allstudents`)
        })
        .catch(err => {
            console.log(err);
        });
})

router.post('/edit/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.teacher = req.body.teacher;
            student.siblings = req.body.siblings;
            student.save()
                .then(() => res.json('Student updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Student.findByIdAndDelete(id)
        .then(() => res.json('Student deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;
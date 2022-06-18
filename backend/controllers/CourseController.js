const express = require('express')
const router = express.Router();
const courseServices = require('../services/CourseService.js')
const { getDocs } = require('../helpers/own_pagination')
const { transform_elas } = require('../helpers/transfrom_courses_from_elas')

// load courses
const load_courses = require('../data/courses.json')

router.post('/add', (req, res, next) => {
    courseServices.add(req.body).then(user => {
            res.json(user)
        }
    ).catch(err => next(err))
})

router.post('/add_all', (req, res, next) => {

    // const courses = req.body;
    // const courses = transform_elas(req.body);
    const courses = transform_elas(load_courses);

    courseServices.addAll(courses).then(courses => {
            res.send({status: true})
        }
    ).catch(err => next(err))
})

router.get('/filter', (req, res, next) => {
    courseServices.filter(req).then(courses => {
            res.send(getDocs(courses));
        }
    ).catch(err => next(err))
})

module.exports = router;
const express = require('express');
const courseRoute = express.Router();
const courseController = require('../controllers/courseController');
courseRoute.get('/',courseController.selectCourse);
//courseRoute.post('/',courseController.insertCourse);
// courseRoute.put('/:id',courseController.updateCourseCourse);
// courseRoute.delete('/:id',courseController.deleteCourseCourse);
module.exports = courseRoute;
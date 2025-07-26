const express = require('express');
const courseRoute = express.Router();
const courseController = require('../controllers/courseController');
courseRoute.get('/',courseController.selectCourse);
courseRoute.post('/',courseController.insertCourse);
courseRoute.delete('/:id',courseController.deleteCourse);
//courseRoute.put('/:id',courseController.updateCourseCourse);
module.exports = courseRoute;
const express = require('express');
const courseLimitRoute = express.Router();
const courseLimitController = require("../controllers/coursesLimitController");
courseLimitRoute.get('/',courseLimitController.selectCourse);
module.exports = courseLimitRoute;
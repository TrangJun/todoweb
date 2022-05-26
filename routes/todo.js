const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const todoController = require('../controllers/todoController.js')

router.post('/', urlencodedParser,todoController.addTask);

router.get('/', urlencodedParser, todoController.getTaskList);

router.get('/:taskId', urlencodedParser, todoController.getTask);

router.delete('/:taskId', urlencodedParser, todoController.deleteTask);

router.patch('/:taskId', urlencodedParser, todoController.updateTask);

module.exports = router;
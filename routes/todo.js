const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const tasksModel = require('../models/task.js');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const todoController = require('../controllers/todoController.js')
// router.get('/', (req, res)=>{
//     res.send('router todo')
// });

router.post('/addTask', urlencodedParser,todoController.addTask);

router.get('/', urlencodedParser, todoController.getTaskList);

router.get('/:taskId', urlencodedParser, todoController.getTask);

router.delete('/:taskId', urlencodedParser, todoController.deleteTask);

router.patch('/:taskId', urlencodedParser, todoController.updateTask);

module.exports = router;
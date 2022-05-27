// const express = require('express');
import Express, {Request, Response, NextFunction} from 'express';
// import express from 'express';
const router = Express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const todoController = require('../controllers/todoController.ts')

router.post('/', urlencodedParser,todoController.addTask);

router.get('/', urlencodedParser, todoController.getTaskList);

router.get('/:taskId', urlencodedParser, todoController.getTask);

router.delete('/:taskId', urlencodedParser, todoController.deleteTask);

router.patch('/:taskId', urlencodedParser, todoController.updateTask);

module.exports = router;
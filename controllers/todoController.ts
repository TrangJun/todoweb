import  express, {Request, Response, NextFunction} from 'express';
import Task from '../models/task';
// const tasksModel = require('../models/task.js');

exports.getTaskList = function(req: Request, res: Response){
    Task.find()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}
exports.addTask = function(req: Request, res: Response){
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    });
    newTask.save()
    .then(data=> {
        console.log(data);
        res.json(data);
    })
    .catch(err=>{
        res.send("xay ra loi o server");
    });
}
exports.getTask = function(req: Request, res: Response){
    let id = req.params.taskId;
    console.log(id);
    Task.findById(id)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}

exports.deleteTask = function(req: Request, res: Response){
    let id = req.params.taskId;
    console.log(id);
    Task.deleteOne({_id: req.params.taskId})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}

exports.updateTask = function(req: Request, res: Response){
    let id = req.params.taskId;
    Task.updateOne({_id: req.params.taskId},
                            {
                                $set:{
                                    title: req.body.title,
                                }
                            })
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}
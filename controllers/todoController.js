const tasksModel = require('../models/task.js');

exports.addTask = function(req, res){
    const newTask = new tasksModel({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    });
    console.log(newTask);
    newTask.save()
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err =>{
        res.send("xay ra loi o server");
    });
}

exports.getTaskList = function(req, res){
    tasksModel.find()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}

exports.getTask = function(req, res){
    let id = req.params.taskId;
    console.log(id);
    tasksModel.findById(id)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}

exports.deleteTask = function(req, res){
    let id = req.params.taskId;
    console.log(id);
    tasksModel.deleteOne({_id: req.params.taskId})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
        res.send("xay ra loi o server");
    })
}

exports.updateTask = function(req, res){
    let id = req.params.taskId;
    tasksModel.updateOne({_id: req.params.taskId},
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
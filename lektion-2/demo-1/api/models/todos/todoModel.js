const mongodb = require('mongoose');
const Todo = require('./todoSchema');

exports.getTodos = (req, res) => {
    Todo.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getOneTodo = (req, res) => {
    Todo.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}


exports.saveTodo = (req, res) => {
    const todo = new Todo ({
        _id: new mongodb.Types.ObjectId,
        title: req.body.title
    })

    todo.save()
    .then(() => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'The todo was created successfully'
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create the todo'
        })
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Todo deleted'
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to delete the todo'
        })
    })
}
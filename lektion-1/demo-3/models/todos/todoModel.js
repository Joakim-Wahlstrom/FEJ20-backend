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
}


exports.saveTodo = (req, res) => {
    const todo = new Todo ({
        _id: new mongodb.Types.ObjectId,
        title: req.body.title
    })

    todo.save()
    // .then(data => res.json(data))
    .then(() => {
        res.status(201).json({
            stausCode: 201,
            status: true,
            message: 'Todo created successfully'
        })
    })
    .catch(() => {
        res.status(500).json({
            stausCode: 500,
            status: false,
            message: 'Failed to create todo'
        })
    })
}

exports.deleteTodo = (req, res) => {
    Todo.remove({_id: req.params.id})
    .then(data => {
        res.status(200).json({
            stausCode: 200,
            status: true,
            message: 'Todo deleted',
            todo: data
        })
    })
    .catch(() => {
        res.status(500).json({
            stausCode: 500,
            status: false,
            message: 'Failed to delete todo'
        })
    })
}
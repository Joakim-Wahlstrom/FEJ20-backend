const mongodb = require('mongoose');

const todoSchema = mongodb.Schema({

    _id: mongodb.Schema.Types.ObjectId,
    title: { type: String, reqired: true },
    completed: { type: Boolean, default: false },

    created: { type: Date, default: Date.now() }

})

module.exports = mongodb.model('todo', todoSchema);
const mongoose = require('mongoose')



const TaskSchema = new mongoose.Schema({
    todos:{
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const TaskModel = mongoose.model('task', TaskSchema)
module.exports = TaskModel
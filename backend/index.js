const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const TaskModel = require('./TaskModel.js')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://rayuser:$erverS669@serverdb.vbrcs.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=serverdb')
    .then(() => {
        app.listen(4000, () => {
        console.log('SERVER RUNNING ON PORT 4000')
    })
    })
    .catch((err) => console.log(err))


app.get('/read', async (req, res) => {
    const {todos, checked} = req.body
    const items = await TaskModel.find(req.body)
    res.json(items)
})

app.get('/look/:id', async (req, res) => {
    const {id} = req.params
    const {todos, checked} = req.body
    const items = await TaskModel.findById(id, req.body)
    res.json(items)
})

app.post('/create', async (req, res) => {
    const {todos, checked} = req.body
    const newitems = new TaskModel(req.body)
    await newitems.save()
    res.json(newitems)
})

app.put('/update/:id', async(req, res) => {
    const {id} = req.params
    const {todos, checked} = req.body
    const updateditems = await TaskModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    res.json(updateditems)
})

app.delete('/remove/:id', async(req, res) => {
    const {id} = req.params
    const {todos, checked} = req.body
    const delItems = await TaskModel.findByIdAndDelete(
        id,
        req.body,
        {new:true}
    )
})

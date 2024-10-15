const expres=require('express')
const router =expres.Router()


router.get("/taskrecords",async(req,res)=>{
  const fetchTodoHandler = require('../services/fetchTodoTasks')
  res.status(200).json(await fetchTodoHandler.fetchTasks(req))

})

router.post("/deleterecords",async(req,res)=>{
  const deleteRecordsHandler = require('../services/deleteTodo')
  res.status(200).json(await deleteRecordsHandler.deleteTodo(req))

})
router.post("/editrecords",async(req,res)=>{
  const editRecordsHandler = require('../services/editTodo')
  res.status(200).json(await editRecordsHandler.editTodo(req))

})

router.post("/addrecord",async(req,res)=>{
  const addTodoHandler = require('../services/addTodo')
  res.status(200).json(await addTodoHandler.addTodo(req))

})

module.exports =router
const express = require('express')
const { getBooks, addBook, searchBook, deleteBook } = require('../controllers/userControllers')
const { validationmiddleware } = require('../middlewares/bookDetailsValidation')

const userRoutes = express.Router()

userRoutes.get("/getbooks", getBooks)

userRoutes.post("/addbook", validationmiddleware, addBook)

userRoutes.get("/searchbook/:title", searchBook)

userRoutes.delete("/deletebook/:title", deleteBook)

module.exports = userRoutes

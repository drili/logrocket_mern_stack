// *** routes/api/books.js

const express = require("express")
const router = express.Router()

// * Load book model
const Book = require("../../models/Book")

// @route GET api/books/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("::: Book route testing!"))

// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: "::: No books found." }))
})

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: "::: No book found." }))
})

// @route GET api/books
// @description add/save book
// @access Public
router.post("/", (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: "::: Book added successfully" }))
        .catch(err => res.status(404).json({ error: "::: Unable to add this book" }))
})

// @route GET api/books/:id
// @description Update book
// @access Public
router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: "::: Book updated successfully" }))
        .catch(err => res.status(404).json({ error: "::: Unable to update book" }))
})

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: "::: Book deleted successfully" }))
        .catch(err => res.status(404).json({ error: "::: Error deleting book" }))
})

module.exports = router
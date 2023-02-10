const express = require("express")
const connectDB = require("./config/db")

const app = express()

const books = require('./routes/api/books');

connectDB()

app.get("/", (req, res) => res.send("Hello world!"))

app.use('/api/books', books);

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`("::: Server running on port ${port}`))
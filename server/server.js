const express = require("express")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())  //middleware


app.use("/books", userRoutes)

app.listen(3000, () => {
    console.log("port starts at port 3000")
})
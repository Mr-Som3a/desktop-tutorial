const express =  require("express")
const app = express()

app.get("/", (req, res) => { res.send("hello") })

app.listen(3050)
console.log("server is running on")


const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/app")
const db = mongoose.connection

db.on("error",error=>console.error(error))
db.on("open",arg=>console.log("connect to db"))
import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

//apply a middle ware
app.use(cors())
app.use(express.json())

//specify initial route
app.use("/api/v1/restaurants", restaurants)
//* = any other url
app.use("*", (req, res) => res.status(404).json({erroe: "not found"}))

export default app
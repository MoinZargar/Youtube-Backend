import dotenv from 'dotenv'
import { app } from "./app.js"
import connectDB from "./db/index.js"

dotenv.config({
    path: '.env'
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Express App is not able to connect to Monogodb Database", error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log.log('MongoDB database connection failed', error)
    })
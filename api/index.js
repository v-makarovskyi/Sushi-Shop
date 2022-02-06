const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");

dotenv.config()

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require('./routes/product')


mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('BD connected'))
.catch((error) => console.log(error))

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)



app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running' )
})


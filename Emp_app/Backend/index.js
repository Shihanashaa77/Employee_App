//1.importing express
const express = require('express')
require("./connection")
const empModel = require("./Model/employee")
var cors = require("cors")

//2.Initialize
const app = new express()

//mid
app.use(express.json())
app.use(cors())


//3.API Creation
app.get('/', (req, res) => {
    res.send("Message from the server")
})

app.get('/Hey', (req, res)=> {
    res.send("msg")
})

app.get('/trial', (req, res) => {
    res.send("Trial message")
})

//Add Api 
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save();
        res.send({ message: "Data added!" })
        
    } catch (error) {
        console.log(error)
    }
})

app.get("/view", async(req, res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message:"Data deleted"})
    } catch (error) {
        console.log(error)
    }
})
    app.put("/update/:id", async (req, res) => {
        try {
            var data = await empModel.findByIdAndUpdate(req.params.id,req.body)
            res.send({ message:"Updated",data})
        } catch (error) {
            console.log(error)
        }

}
)

//4.Port
app.listen(3004, () => {
    console.log("Port is Running");
} )
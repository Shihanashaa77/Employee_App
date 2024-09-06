var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shihanashaa77:shihana@cluster0.khjyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log("connected")
    })
    .catch((err) => {
    console.log(err)
})
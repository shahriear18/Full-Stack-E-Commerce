const { default: mongoose } = require("mongoose")

exports.dbconfig = () => {
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("Database Connected")
    }).catch((err) =>{
        console.log(err.message)
    })
}
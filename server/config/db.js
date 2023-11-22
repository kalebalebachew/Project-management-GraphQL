const mongoose = require('mongoose')


const connectDB = async () =>{

    const conn = await mongoose.connect('PUT YOUR MONGODB CONNECTION URL HERE')
      
     
    console.log(`Mongodb Connected: ${conn.connection.host}`)


    }

    module.exports = connectDB

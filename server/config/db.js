const mongoose = require('mongoose')


const connectDB = async () =>{

    const conn = await mongoose.connect('mongodb+srv://kalebalebachew:kalebalebachew@cluster0.zqw5exh.mongodb.net/?authSource=+PG-GRAPHQL&authMechanism=SCRAM-SHA-1')
      
     
    console.log(`Mongodb Connected: ${conn.connection.host}`)


    }

    module.exports = connectDB
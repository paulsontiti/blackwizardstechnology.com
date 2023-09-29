import {connect,connection} from "mongoose";

const conn ={
    isConnected:false
}

export default async function dbConnect(){
    if(conn.isConnected) return

    const db = await connect(process.env.DATABASE_URL as string)
    conn.isConnected = (db.connections[0].readyState as unknown) as boolean

    return {db,connection}
}

connection.on("connected",()=>{
    console.log("MongoDB connected to database")
})

connection.on("error",(err)=>{
    console.log("MongoDB connection  to database failed")
})
// const connectMongo = async ()=> mongoose.connect(process.env.MONGODB_URI)

// export default connectMongo
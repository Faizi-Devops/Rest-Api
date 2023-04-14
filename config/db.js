import mongoose from "mongoose"

const connectDatabase = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nothing')
        console.log("Database Created successfully")
    } catch (error) {
        console.log(error)
        
    }

}
export default connectDatabase;
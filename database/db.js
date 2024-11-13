import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

const Connection = async () => {
    const URL = `mongodb+srv://${user}:${password}@cluster0.uoccm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("DB Connect succesfully")
    } catch (error) {
        console.log("Error while connecting DB", error.message)
    }
}

export default Connection
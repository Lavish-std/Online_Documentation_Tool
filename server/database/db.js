import mongoose  from 'mongoose';

mongoose.set('strictQuery', true);
const Connection = async (username = 'lavishdixit07', password = 'addmetoday') => {
    const URL = `mongodb+srv://${username}:${password}@documentation-tool.f8hiw.mongodb.net/?retryWrites=true&w=majority&appName=Documentation-tool`;


    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
 const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = {connectDB}
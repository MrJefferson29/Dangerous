const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    // You might want to throw the error or handle it appropriately based on your application's needs.
    throw error;
  }
};

module.exports = connectDatabase;

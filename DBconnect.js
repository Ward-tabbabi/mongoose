const mongoose = require("mongoose");
const DBconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://WARD-TABBABI:WARD123456@mongoose.7mvza.mongodb.net/MONGOOSE?retryWrites=true&w=majority"
    );
    console.log("data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DBconnect;

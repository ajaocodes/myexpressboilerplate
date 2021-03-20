/// grab environment variables
require("dotenv").config()
/// IMPORT MONGOOSE
const mongoose = require("mongoose")
// IMPORT MERCED LOGGER FOR COLORFUL LOGS
const { log } = require("mercedlogger")
// Bring in our database string from .env or default string
const MONGODB_URI =
  process.env.MONGODBURI || "mongodb://localhost:27017/defaultdb"

  console.log(MONGODB_URI)
///////////////////////////////////
// Mongoose Configuration Object to Avoid Warnings
///////////////////////////////////
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

///////////////////////////////////
// Making the Database Connection
///////////////////////////////////
mongoose.connect(MONGODB_URI, config)
/////////////////////////////////
// Handling Connection Events
/////////////////////////////////
mongoose.connection
// event for when connection open
.on("open", () => log.green("STATUS", "Connected to Mongo"))
// event for when connection closes
.on("close", () => log.red("STATUS", "Disconnected from Mongo"))
// event for errors
.on("error", (error) => log.red("Error", error))
////////////////////////////////
// Export the Connection
/////////////////////////////////
module.exports = mongoose
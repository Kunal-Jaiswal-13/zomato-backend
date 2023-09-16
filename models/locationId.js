const mongoose = require("mongoose");

const schema = mongoose.Schema;

const locationSchema = new schema({
  name: String,
  city_id:Number,
  location_id:Number,
  city: String,
  country_name: String,
});



const Locations = mongoose.model("restaurant",locationSchema);

module.exports = Locations;
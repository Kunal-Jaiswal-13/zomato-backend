const mongoose = require("mongoose");

const schema = mongoose.Schema;
const restaurantSchema = new schema({
  name: String,
  city: String,
  location_id: Number,
  city_id: Number,
  locality: String,
  thumb: Array,
  aggregate_rating: Number,
  rating_text: String,
  min_price: Number,
  contact_number: Number,
  cuisine: Array,
  image: String,
  mealtype_id: Number,
});

const Restaurant = mongoose.model("restaurantData", restaurantSchema);
module.exports = Restaurant;

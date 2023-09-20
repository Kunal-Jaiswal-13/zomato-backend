const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ejs = require("ejs");

const app = express()

const url = "mongodb+srv://kjaiswal1103:shreeshyam1103@zomato.ohrgouj.mongodb.net/student?retryWrites=true&w=majority";

const Locations = require("./models/locationId");
const Restaurant = require("./models/restaurantdata");
const MealType = require("./models/mealtypedata");
const MenuItem = require("./models/menuitem");

app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind("error"));
db.once("open", () => {
  console.log("connected successfully");
});

// Locations.insertMany([
//   {
//     name: "ShalimarBagh",
//     city_id: 1,
//     location_id: 1,
//     city: "Delhi",
//     country_name: "India",
//   },
//   {
//     name: "Janpat",
//     city_id: 1,
//     location_id: 2,
//     city: "Delhi",
//     country_name: "India",
//   },
//   {
//     name: "MSP",
//     city_id: 1,
//     location_id: 3,
//     city: "Delhi",
//     country_name: "India",
//   },
//   {
//     name: "MSP",
//     city_id: 2,
//     location_id: 4,
//     city: "Pune",
//     country_name: "India",
//   },
//   {
//     name: "AnandVihar",
//     city_id: 1,
//     location_id: 5,
//     city: "Delhi",
//     country_name: "India",
//   },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Restaurant.insertMany([
//   {
//     name: "Domino's",
//     city: "Delhi",
//     location_id: 1,

//     city_id: 1,
//     locality: "ShalimarBagh",
//     thumb: [
//       "assests/breakfast.jpg",
//       "assests/dinner.jpg",
//       "assests/drinks.jpg",
//       "assests/dinner.jpg",
//     ],
//     aggregate_rating: 4.2,
//     rating_text: "VeryGood",
//     min_price: 666,
//     contact_number: 919453524651,
//     cuisine: [
//       {
//         id: 1,
//         name: "NorthIndian",
//       },
//       {
//         id: 4,
//         name: "FastFood",
//       },
//     ],
//     image: "./assests/breakfast.jpg",
//     mealtype_id: 1,
//   },

//   {
//     name: "KFC",
//     city: "Delhi",
//     location_id: 1,
//     city_id: 1,
//     locality: "ShalimarBagh",
//     thumb: [
//       "assests/breakfast.jpg",
//       "assests/dinner.jpg",
//       "assests/drinks.jpg",
//       "assests/dinner.jpg",
//     ],
//     aggregate_rating: 4.5,
//     rating_text: "Excellent",
//     min_price: 333,
//     contact_number: 919453524651,
//     cuisine: [
//       {
//         id: 2,
//         name: "SouthIndian",
//       },
//       { id: 4, name: "FastFood" },
//     ],
//     image: "./assests/lunch.jpg",
//     mealtype_id: 1,
//   },
//   {
//     name: "BurgerKing",
//     city: "Delhi",
//     location_id: 1,
//     city_id: 1,
//     locality: "ShalimarBagh",
//     thumb: [
//       "assests/breakfast.jpg",
//       "assests/dinner.jpg",
//       "assests/drinks.jpg",
//       "assests/dinner.jpg",
//     ],
//     aggregate_rating: 4.5,
//     rating_text: "Excellent",
//     min_price: 999,
//     contact_number: 919453524651,
//     cuisine: [
//       { id: 2, name: "SouthIndian" },
//       { id: 4, name: "FastFood" },
//     ],
//     image: "./assests/dinner.jpg",
//     mealtype_id: 1,
//   },
//   {
//     name: "BabaKaDhaba",
//     city: "Mumbai",
//     location_id: 5,
//     city_id: 1,
//     locality: "AnandVihar",
//     thumb: [
//       "assests/breakfast.jpg",
//       "assests/dinner.jpg",
//       "assests/drinks.jpg",
//       "assests/dinner.jpg",
//     ],
//     aggregate_rating: 3.5,
//     rating_text: "Excellent",
//     min_price: 599,
//     contact_number: 919453524651,
//     cuisine: [
//       { id: 2, name: "SouthIndian" },
//       { id: 4, name: "FastFood" },
//     ],
//     image: "./assests/snacks.jpg",
//     mealtype_id: 2,
//   },
// ]) .then((data) => {
//        console.log(data);
//      })
//      .catch((err) => console.log(err));;

// MealType.insertMany([
//   {
//     name: "Breakfast",
//     content: "Start your day with exclusive breakfast options",
//     image: "./assests/breakfast.jpg",
//     meal_type: 1,
//   },
//   {
//     name: "Lunch",
//     content: "Start your day with exclusive lunch options",
//     image: "./assests/lunch.jpg",
//     meal_type: 2,
//   },
//   {
//     name: "Dinner",
//     content: "Start your day with exclusive dinner options",
//     image: "./assests/dinner.jpg",
//     meal_type: 3,
//   },
//   {
//     name: "Snacks",
//     content: "Start your day with exclusive snacks options",
//     image: "./assests/snacks.jpg",
//     meal_type: 4,
//   },
//   {
//     name: "Drinks",
//     content: "Start your day with exclusive drinks options",
//     image: "./assests/drink.jpg",
//     meal_type: 5,
//   },
//   {
//     name: "NightLife",
//     content: "Start your day with exclusive nightlife options",
//     image: "./assests/nightlife.jpg",
//     meal_type: 6,
//   },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

app.get("/locationid", async (req, res) => {
  const locations = await Locations.find({});
  res.json({ message: "locations fetched successfully", locations });
});

app.get("/restaurantdata", async (req, res) => {
  const restaurant = await Restaurant.find({});
  res.send({ message: "restaurant data fetched successfully", restaurant });
});

app.get("/restaurantdata/:locationid", async (req, res) => {
  const { locationid } = req.params;
  const restaurant = await Restaurant.find({ location_id: locationid });
  res.json({ message: "restaurantdata fetched successfully", restaurant });
});

app.get("/restaurantdatabymeal/:mealtype_id", async (req, res) => {
  const mealtype_id = Number(req.params.mealtype_id);

  const restaurant = await Restaurant.find({ mealtype_id: mealtype_id });
  res.json({ message: "restaurantdata fetched successfully", restaurant });
});

app.get("/restaurantcuisine/:cuisine_id", async (req, res) => {
  const cuisineid = Number(req.params.cuisine_id);
  console.log(cuisineid);

  const restaurant = await Restaurant.find({ "cuisine.id": cuisineid });
  console.log(restaurant);
  res.json({
    message: "restaurantdata cusinie id fetched successfully",
    restaurant,
  });
});

app.get("/restaurantcost/:lCost/:hCost", async (req, res) => {
  // const minprice = Number(req.params.min_price);
  const lCost = Number(req.params.lCost);
  console.log(lCost);
  const hCost = Number(req.params.hCost);
  console.log(hCost);
  // console.log(minprice);

  const restaurant = await Restaurant.find({
    min_price: { $gte: lCost, $lte: hCost },
  });
  res.json({ message: "restaurant costs fetched successfully", restaurant });
});

// app.get("/restaurantsort/:")

app.get("/restaurantById/:id", async (req, res) => {
  const { id } = req.params;
  const restaurant = await Restaurant.find({ _id: id });
  // console.log(restaurantid)
  res.json({ message: "restaurant id fetcjed succesfully ", restaurant });
});

app.get("/mealtypedata", async (req, res) => {
  const mealtype = await MealType.find({});
  res.json({ message: "mealtype data fetched successfully", mealtype });
});

const menu = new MenuItem({
  restaurant_name: "Domino's",
  restaurant_id: "64815bf5f4bf015f13c76693",
  menu_items: [
    {
      name: "Corn Pizza",
      description: "A delectable combination of sweet and juicy golden corn",
      price: 379,
      qty: 10,
      image_url: "Assets/breakfast.jpg",
    },
    {
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 239,
      qty: 4,
      image_url: "Assets/breakfast.jpg",
    },
    {
      name: "Farmhosue",
      description:
        "Delightful combination of onion capsicum, tomato & grilled mashroom",
      price: 459,
      qty: 6,
      image_url: "Assets/breakfast.jpg",
    },
  ],
});
console.log(menu);
// menu.save();

app.get("/menuitem/:restaurant_id", async (req, res) => {
  const { restaurant_id } = req.params;
  // console.log("restaurant id is", restaurant_id);
  // console.log("restauranttype of id is", typeof restaurant_id);
  const menuItem = await MenuItem.find({ restaurant_id: restaurant_id });
  res.json(menuItem);
  // console.log(menuItem);
});

app.get("/menuitem", async (req, res) => {
  const menuItem = await MenuItem.find({});
  res.json(menuItem);
  console.log("menuitem is :", menuItem);
});

app.listen(3003, () => {
  console.log("server is lisgtening on port number 3003");
});

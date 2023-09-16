const mongoose = require("mongoose");

const schema = mongoose.Schema;

const mealtypeSchema = new schema({
    name:String,
    content:String,
    image:String,
    meal_type:Number
});

const MealType = mongoose.model("mealtypedata",mealtypeSchema);

module.exports = MealType;
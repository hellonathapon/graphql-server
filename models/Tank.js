const mongoose = require("mongoose");
const { Schema } = mongoose;

const tankSchema = new Schema({
  id: String,
  name: String,
  type: String,
  placeOfOrigin: String,
  imgUrl: String,
  serviceHistory: {
    producedYear: String,
    manufacturer: String,
  },
  specifications: {
    mass: String,
    length: String,
    width: String,
    height: String,
    crew: String,
    engine: String,
    power: String,
    operationalRange: String,
    maximumSpeed: String,
  },
  armament: {
    mainArmament: String,
    secondArmament: String,
  },
});

const tank = mongoose.model("tank", tankSchema);
module.exports = tank;

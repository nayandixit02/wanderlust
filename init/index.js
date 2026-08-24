if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB successfully");

  let hostUser = await User.findOne();
  if (!hostUser) {
    let defaultUser = new User({
      email: "host@exploro.com",
      username: "exploro_host",
    });
    hostUser = await User.register(defaultUser, "exploro123");
    console.log("Created default host user:", hostUser.username);
  }

  await Listing.deleteMany({});
  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: hostUser._id,
  }));
  
  await Listing.insertMany(listingsWithOwner);
  console.log(`Successfully initialized ${listingsWithOwner.length} listings in the database!`);
  
  await mongoose.connection.close();
}

main().catch((err) => {
  console.error("Error seeding DB:", err);
});

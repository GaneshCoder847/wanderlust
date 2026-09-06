const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const path = require("path");

// Load .env from root folder
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Use process.env.ATLASDB_URL or fallback if defined
const dbUrl = process.env.ATLASDB_URL;

if (!dbUrl) {
    console.error("ERROR: ATLASDB_URL is not defined in your .env file!");
    process.exit(1);
}

main()
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
        initDB();
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});

        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "6a9d8988e8fa7ae3ebcbb402",
        }));

        await Listing.insertMany(initData.data);
        console.log("MongoDB Atlas database was initialized successfully!");
    } catch (err) {
        console.log("Seeding error:", err);
    } finally {
        mongoose.connection.close();
    }
};
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Use ATLASDB_URL if available in .env, otherwise fallback to local DB
require("dotenv").config({ path: "../.env" });
const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to MongoDB");
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

        // Paste your copied MongoDB User _id here
        const defaultOwnerId = "6a9d8988e8fa7ae3ebcbb402";

        const updatedData = initData.data.map((obj) => ({
            ...obj,
            owner: defaultOwnerId,
        }));

        await Listing.insertMany(updatedData);
        console.log("Data was initialized successfully with world listings!");
    } catch (err) {
        console.log("Seeding error:", err);
    } finally {
        mongoose.connection.close();
    }
};
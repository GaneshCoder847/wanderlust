const Listing = require("../models/listing");
const maptilerClient = require("@maptiler/client");
const mapToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = mapToken;

// UPDATED: Index route to handle search functionality
module.exports.index = async (req, res) => {
    const { search } = req.query;
    let allListings;

    if (search && search.trim() !== "") {
        // Creates a case-insensitive regex pattern
        const regex = new RegExp(search.trim(), "i");

        // Searches across location, country, or title fields
        allListings = await Listing.find({
            $or: [
                { location: regex },
                { country: regex },
                { title: regex }
            ]
        });

        // Optional flash message if no results found
        if (allListings.length === 0) {
            req.flash("error", "No listings found matching your search!");
        }
    } else {
        // Return all listings if search query is empty
        allListings = await Listing.find({});
    }

    res.render("listings/index", { allListings, searchQuery: search });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author",
        },
    })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    // Fetch geocoding data from MapTiler
    let response = await maptilerClient.geocoding.forward(req.body.listing.location, {
        limit: 1,
    });

    let url = req.file ? req.file.path : "";
    let filename = req.file ? req.file.filename : "";

    // Construct listing
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    // Attach GeoJSON geometry from MapTiler response if available
    if (response.features && response.features.length > 0) {
        newListing.geometry = response.features[0].geometry;
    }

    let savedListing = await newListing.save();
    console.log(savedListing);

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
};
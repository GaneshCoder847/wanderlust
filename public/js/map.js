// Retrieve values passed via HTML dataset on the #map div
const mapElement = document.getElementById("map");
const mapToken = mapElement.dataset.token;
const listing = JSON.parse(mapElement.dataset.listing);

maptilersdk.config.apiKey = mapToken;

// Check if geometry coordinates exist, otherwise fallback to default location
const coordinates = (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length)
    ? listing.geometry.coordinates
    : [77.209, 28.6139];

// Initialize the map
const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
    center: coordinates,
    zoom: 9
});

// Create the popup following her structure (adapted for MapTiler)
const popup = new maptilersdk.Popup({ offset: 25 })
    .setHTML(
        `<h3>${listing.title}</h3><p>Exact Location will be provided after booking</p>`
    );

// Create the marker and attach the popup
new maptilersdk.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(popup) // Binds popup so it opens when clicking the marker
    .addTo(map);
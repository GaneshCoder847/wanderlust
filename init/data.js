const sampleListings = [
    {
        title: "Eiffel Tower View Penthouse",
        description: "Elegant Parisian apartment featuring classic French balconies, luxury interiors, and panoramic views of the iconic Eiffel Tower.",
        image: {
            filename: "paris_penthouse",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
        },
        price: 18500,
        location: "Paris",
        country: "France",
        geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
    },
    {
        title: "Traditional Japanese Machiya Garden Villa",
        description: "Stay in an authentic wooden townhouse surrounded by serene bamboo gardens, tatami rooms, and traditional tea ceremony spaces near Gion.",
        image: {
            filename: "kyoto_machiya",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
        },
        price: 14200,
        location: "Kyoto",
        country: "Japan",
        geometry: { type: "Point", coordinates: [135.7681, 35.0116] }
    },
    {
        title: "Aegean Sea Cliffside Cave House",
        description: "Iconic whitewashed cave suite built directly into the volcanic cliffs of Oia, featuring a private plunge pool overlooking the caldera.",
        image: {
            filename: "santorini_cave",
            url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"
        },
        price: 22000,
        location: "Santorini",
        country: "Greece",
        geometry: { type: "Point", coordinates: [25.396, 36.4618] }
    },
    {
        title: "Luxury Manhattan Skyline Loft",
        description: "Spacious industrial-chic loft in Soho with floor-to-ceiling windows offering sweeping skyline views of Midtown Manhattan.",
        image: {
            filename: "nyc_loft",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
        },
        price: 26500,
        location: "New York",
        country: "United States",
        geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
    },
    {
        title: "Ubud Tropical Jungle Treehouse",
        description: "Open-air bamboo sanctuary nestled in the lush rainforest canopy of Ubud, with an infinity pool and scenic river canyon views.",
        image: {
            filename: "bali_treehouse",
            url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
        },
        price: 8900,
        location: "Bali",
        country: "Indonesia",
        geometry: { type: "Point", coordinates: [115.2625, -8.5069] }
    },
    {
        title: "Historic Colosseum Terrace Suite",
        description: "Restored 17th-century penthouse with a spacious private roof garden overlooking the ancient Roman Colosseum.",
        image: {
            filename: "rome_suite",
            url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"
        },
        price: 16800,
        location: "Rome",
        country: "Italy",
        geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
    },
    {
        title: "Ocean View Villa at Table Mountain",
        description: "Modern architectural villa situated along the Camps Bay coastline, offering dramatic mountain backdrops and Atlantic ocean sunsets.",
        image: {
            filename: "capetown_villa",
            url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
        },
        price: 19500,
        location: "Cape Town",
        country: "South Africa",
        geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
    },
    {
        title: "Alpine Lakefront Chalet",
        description: "Cosy timber lodge situated directly on the shores of Lake Wakatipu, with breathtaking views of the Remarkables mountain range.",
        image: {
            filename: "queenstown_chalet",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        },
        price: 15400,
        location: "Queenstown",
        country: "New Zealand",
        geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
    },
    {
        title: "Heritage Royal Palace Stay",
        description: "Experience royal Rajasthani culture with vibrant heritage architecture, courtyards, and close access to Hawa Mahal and Amber Fort.",
        image: {
            filename: "jaipur_palace",
            url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
        },
        price: 3500,
        location: "Jaipur",
        country: "India",
        geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
    },
    {
        title: "Swiss Alps Wooden Chalet",
        description: "Authentic ski-in ski-out wooden chalet with direct views of the Matterhorn, indoor fireplace, and private sauna.",
        image: {
            filename: "swiss_chalet",
            url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
        },
        price: 24000,
        location: "Zermatt",
        country: "Switzerland",
        geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
    }
];

module.exports = { data: sampleListings };
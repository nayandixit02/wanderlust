const sampleListings = [
  // 1. BEACH & COASTAL
  {
    title: "Seaside Sunset Villa with Private Pool",
    description: "Perched above the Arabian Sea, this beachfront sanctuary offers floor-to-ceiling glass doors, a sunset infinity plunge pool, and direct sandy beach access in North Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4500,
    location: "Goa",
    country: "India",
    category: "beach",
  },
  {
    title: "Malibu Oceanfront Luxury Haven",
    description: "Step directly onto the golden sands of Malibu. Featuring panoramic Pacific views, expansive hardwood decks, a modern chef's kitchen, and soothing ocean breezes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 9800,
    location: "Malibu",
    country: "United States",
    category: "beach",
  },
  {
    title: "Santorini Cliffside Cave Villa with Caldera View",
    description: "Classic whitewashed Cycladic architecture nestled into the cliffs of Oia. Enjoy an outdoor heated jacuzzi with unobstructed sunset views over the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    },
    price: 8500,
    location: "Santorini",
    country: "Greece",
    category: "beach",
  },
  {
    title: "Tulum Eco-Chic Beachfront Bungalow",
    description: "Nestled between lush Mayan jungle and white Caribbean sands, this sustainable luxury bungalow features outdoor rainforest showers and private hammock decks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    },
    price: 5200,
    location: "Tulum",
    country: "Mexico",
    category: "beach",
  },
  {
    title: "Amalfi Coastline Clifftop Retreat",
    description: "Overlooking the azure waters of Positano, this villa features terraced lemon orchards, handcrafted ceramic tiles, and sunlit sea-view balconies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    },
    price: 11000,
    location: "Amalfi Coast",
    country: "Italy",
    category: "beach",
  },

  // 2. MOUNTAIN & ALPINE
  {
    title: "Swiss Alpine Chalet with Matterhorn View",
    description: "A timber-crafted luxury chalet in Zermatt featuring a stone fireplace, private cedar sauna, floor-to-ceiling mountain vistas, and ski-in/ski-out convenience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 12500,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountain",
  },
  {
    title: "Himalayan Pine Forest Log Cabin",
    description: "Escape to the serene pine valleys of Manali. Features cozy wooden interiors, a wood-burning stove, mountain brook sounds, and panoramic snow-peak views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3200,
    location: "Manali",
    country: "India",
    category: "mountain",
  },
  {
    title: "Aspen Luxury Ski-in Mountain Lodge",
    description: "Surrounded by golden aspen trees and snowy peaks, this modern lodge offers a heated outdoor pool, soaring timber beams, and world-class ski trail access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    },
    price: 14000,
    location: "Aspen",
    country: "United States",
    category: "mountain",
  },
  {
    title: "Banff Glacial Valley Retreat",
    description: "Nestled within the Canadian Rockies, this lodge offers timber craftsmanship, an outdoor hot tub overlooking glacial peaks, and close proximity to Lake Louise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
    },
    price: 7600,
    location: "Banff",
    country: "Canada",
    category: "mountain",
  },
  {
    title: "Leh Ladakh High-Altitude Eco Villa",
    description: "Experience the magic of the trans-Himalayan high desert. Featuring traditional Ladakhi earth-brick architecture, large solar windows, and night sky stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4800,
    location: "Leh Ladakh",
    country: "India",
    category: "mountain",
  },

  // 3. ICONIC CITIES
  {
    title: "Chic Haussmannian Apartment near Eiffel Tower",
    description: "Classic Parisian elegance with ornate ceiling moldings, marble fireplaces, herringbone oak floors, and wrought-iron balconies overlooking romantic Parisian boulevards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    },
    price: 8900,
    location: "Paris",
    country: "France",
    category: "city",
  },
  {
    title: "Manhattan Skyline Penthouse with Terrace",
    description: "Experience the vibrant pulse of New York City from this high-floor loft featuring 180-degree skyline views, modern designer furnishings, and a private rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 13500,
    location: "New York",
    country: "United States",
    category: "city",
  },
  {
    title: "Traditional Kyoto Machiya Townhouse",
    description: "A beautifully preserved historic wooden townhouse in Gion, Kyoto. Features tatami mat tea rooms, shoji screens, a private Zen rock garden, and cypress cedar bath.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6200,
    location: "Kyoto",
    country: "Japan",
    category: "city",
  },
  {
    title: "Renaissance Heritage Apartment in Florence",
    description: "Stay in the heart of historic Florence with views of the Duomo. Features 16th-century frescoed ceilings, antique Italian furnishings, and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80",
    },
    price: 7100,
    location: "Florence",
    country: "Italy",
    category: "city",
  },
  {
    title: "Pink City Heritage Haveli Suite",
    description: "An authentic Rajput palace suite in Jaipur featuring jharokha balconies, hand-carved stone arches, royal courtyards, and rooftop sunset views over the old city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3900,
    location: "Jaipur",
    country: "India",
    category: "city",
  },

  // 4. AMAZING POOLS
  {
    title: "Bali Tropical Jungle Infinity Pool Villa",
    description: "An architectural masterpiece floating above the Ubud rainforest canopy. Features a private multi-tiered infinity pool, open-air living pavilions, and lush flora.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6800,
    location: "Bali",
    country: "Indonesia",
    category: "pool",
  },
  {
    title: "Udaipur Lake Palace View Villa with Pool",
    description: "Overlooking the tranquil waters of Lake Pichola, this royal estate features an illuminated marble pool, sprawling lawns, and stunning views of the City Palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    },
    price: 7500,
    location: "Udaipur",
    country: "India",
    category: "pool",
  },
  {
    title: "Phuket Cliffside Ocean View Pool Villa",
    description: "Cascading down the lush cliffs of Phuket overlooking the Andaman Sea. Includes a cantilevered infinity pool, private sun deck, and floor-to-ceiling ocean vistas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    },
    price: 9200,
    location: "Phuket",
    country: "Thailand",
    category: "pool",
  },

  // 5. CASTLES & HISTORIC ESTATES
  {
    title: "Historic Scottish Highlands Castle Estate",
    description: "Live like nobility in a restored 17th-century castle on 50 private acres in the Scottish Highlands. Includes a grand banquet hall, library, and misty glen views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80",
    },
    price: 16000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castle",
  },
  {
    title: "Château de la Loire Vineyard Estate",
    description: "An authentic French renaissance château nestled among private vineyards in the Loire Valley. Features historic wine cellars, manicured rose gardens, and grand salons.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    },
    price: 14500,
    location: "Loire Valley",
    country: "France",
    category: "castle",
  },

  // 6. GLAMPING & NATURE
  {
    title: "Luxury Sahara Desert Star Camp",
    description: "Experience the infinite silence of the Moroccan dunes. Private luxury desert tent with king-size bedding, Berber carpets, en-suite bathrooms, and fireside dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4200,
    location: "Merzouga",
    country: "Morocco",
    category: "camp",
  },
  {
    title: "Costa Rica Rainforest Canopy Treehouse",
    description: "Suspended 40 feet in the canopy of the Monteverde cloud forest. Enjoy visits from toucans and monkeys, suspension bridge walkways, and open-air rainforest baths.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3600,
    location: "Monteverde",
    country: "Costa Rica",
    category: "camp",
  },
  {
    title: "Cappadocia Fairy Chimney Cave Sanctuary",
    description: "Carved into ancient volcanic rock formations in Goreme. Watch hundreds of hot air balloons rise at sunrise from your private rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
    },
    price: 5800,
    location: "Cappadocia",
    country: "Turkey",
    category: "camp",
  },

  // 7. ARCTIC & NORTHERN LIGHTS
  {
    title: "Tromsø Glass Igloo Aurora Sanctuary",
    description: "Lie beneath heated panoramic glass domes and watch the mesmerizing Northern Lights dance across the Arctic winter sky. Features reindeer pelt bedding and wood saunas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 11500,
    location: "Tromsø",
    country: "Norway",
    category: "arctic",
  },
  {
    title: "Reykjavik Geothermal Heated Aurora Dome",
    description: "Nestled near the Golden Circle in Iceland. Enjoy an outdoor geothermal hot tub, volcanic moss surroundings, and panoramic sky views for aurora viewing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80",
    },
    price: 8900,
    location: "Reykjavik",
    country: "Iceland",
    category: "arctic",
  },

  // 8. DOMES & GEODESIC RETREATS
  {
    title: "Joshua Tree Desert Geodesic Dome",
    description: "A bohemian architectural dome set among iconic Joshua trees and boulders. Featuring mid-century interior styling, vinyl records, outdoor stargazing bed, and fire pit.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533654790264-39164b847145?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4900,
    location: "Joshua Tree",
    country: "United States",
    category: "dome",
  },
  {
    title: "New Zealand Stargazing Alpine Dome",
    description: "Perched near Lake Tekapo in the Aoraki Dark Sky Reserve. Experience the southern hemisphere constellations from your heated glass observatory dome.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6700,
    location: "Queenstown",
    country: "New Zealand",
    category: "dome",
  },

  // 9. BOATS & HOUSEBOATS
  {
    title: "Kerala Backwaters Luxury Kettuvallam Houseboat",
    description: "Glide silently through palm-fringed lagoons and spice plantations in Alleppey. Includes a private chef preparing authentic Kerala seafood feasts on board.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    price: 5500,
    location: "Kerala",
    country: "India",
    category: "boat",
  },
  {
    title: "Amsterdam Historic Canal Houseboat",
    description: "Moor along the scenic Prinsengracht canal in central Amsterdam. Features timber-clad nautical interiors, modern kitchen, and an outdoor water-level terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    },
    price: 7800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "boat",
  },

  // 10. FARMS & COUNTRYSIDE
  {
    title: "Provence Lavender Farm Estate",
    description: "Surrounded by purple lavender fields and century-old olive groves in southern France. Features a sun-drenched stone courtyard, wine cellar, and outdoor pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6400,
    location: "Provence",
    country: "France",
    category: "farm",
  },
];

module.exports = { data: sampleListings };

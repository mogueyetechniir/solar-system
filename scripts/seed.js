db.planets.deleteMany({});
db.planets.insertMany([
  { id: 0, name: "Sun", image: "images/sun.png", velocity: "220 km/s (around the galaxy)", distance: "0 km",
    description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and by far the most important source of energy for life on Earth." },
  { id: 1, name: "Mercury", image: "images/mercury.png", velocity: "47.4 km/s", distance: "57.9 million km",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes only 88 Earth days." },
  { id: 2, name: "Venus", image: "images/venus.png", velocity: "35 km/s", distance: "108.2 million km",
    description: "Venus is the second planet from the Sun. Its thick carbon dioxide atmosphere traps heat, making it the hottest planet in the Solar System." },
  { id: 3, name: "Earth", image: "images/earth.png", velocity: "29.8 km/s", distance: "149.6 million km",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of its surface is covered with water." },
  { id: 4, name: "Mars", image: "images/mars.png", velocity: "24.1 km/s", distance: "227.9 million km",
    description: "Mars is the fourth planet from the Sun. Often called the Red Planet, its reddish color comes from iron oxide on its surface." },
  { id: 5, name: "Jupiter", image: "images/jupiter.png", velocity: "13.1 km/s", distance: "778.5 million km",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant famous for its Great Red Spot, a storm bigger than Earth." },
  { id: 6, name: "Saturn", image: "images/saturn.png", velocity: "9.7 km/s", distance: "1.43 billion km",
    description: "Saturn is the sixth planet from the Sun and the second largest. It is a gas giant best known for its spectacular ring system made of ice and rock." },
  { id: 7, name: "Uranus", image: "images/uranus.png", velocity: "6.8 km/s", distance: "2.87 billion km",
    description: "Uranus is the seventh planet from the Sun. It is an ice giant that rotates on its side, with an axial tilt of about 98 degrees." },
  { id: 8, name: "Neptune", image: "images/neptune.png", velocity: "5.4 km/s", distance: "4.5 billion km",
    description: "Neptune is the eighth and farthest known planet from the Sun. It is an ice giant with the strongest winds in the Solar System." },
  { id: 9, name: "Pluto", image: "images/solar-system.png", velocity: "4.7 km/s", distance: "5.9 billion km",
    description: "Pluto is a dwarf planet in the Kuiper belt. It was considered the ninth planet until 2006, when it was reclassified as a dwarf planet." }
]);
print("Seed OK : " + db.planets.countDocuments() + " planetes");

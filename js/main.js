// Initialize the map
var map = L.map('map').setView([38.28023543166722, -82.45273397151891], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

fetch('data/accessPoints.geojson')
  .then((response) => response.json())
  .then((data) => {
    L.geoJSON(data).addTo(map);
  })
  .catch((error) => console.error('Error loading GeoJSON:', error));

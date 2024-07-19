const riverAccess = 'data/Twelvepole_Access.geojson'
const places = 'data/Twelvepole_Places.geojson'


// Initialize the map
var map = L.map('map').setView([38.28023543166722, -82.45273397151891], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// addGeoJson(riverAccess)
addGeoJson(places)

// Function to create a circle marker
function pointToLayer(feature, latlng) {
  return L.circleMarker(latlng, style(feature));
}

// Function to determine color based on feature properties
function getIcon(type) {
  console.log(retailIcon)
  switch (type) {
    case 'Boat Dealer':
    case 'Dollar Store':
    case 'Retail Store':
      return retailIcon; // Red for type1
    case 'Dam':
      return damIcon; // Red for type1
    case 'Restaurant':
    case 'Cafe':
      return restaurantIcon; // Blue for type2
    case 'Gas Station':
      return fillingstationIcon;
    case 'Recreation/Golf':
      return golfIcon;
    case 'Recreation/Ball Fields':
    case 'Recreation/Playgrounds':
      return forestIcon;
    case 'Farm':
      return farmIcon;
    default: return '#00FF00'; // Green for others
  }
}

// Function to style each feature
// function style(feature) {
//   return {
//     radius: 8,
//     fillColor: getColor(feature.properties.Type),
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
//   };
// }

function addGeoJson(data) {
  fetch(data)
    .then((response) => response.json())
    .then((data) => {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, { icon: getIcon(feature.properties.Type) });
      }
      }).addTo(map);
    })
    .catch((error) => console.error('Error loading GeoJSON:', error));
}
// fetch(riverAccess)
//   .then((response) => response.json())
//   .then((data) => {
//     L.geoJSON(data).addTo(map);
//   })
//   .catch((error) => console.error('Error loading GeoJSON:', error));

const riverAccess = 'data/Twelvepole_Access_v2.geojson'
const places = 'data/Twelvepole_Places_v2.geojson'
const streamgages = 'data/Twelvepole_streamgages.geojson'


// Initialize the map
var map = L.map('map').setView([38.280235, -82.452734], 12);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

addAccess(riverAccess)
addPlaces(places)
addStreamgages(streamgages)

function pointToLayer(feature, latlng) {
  return L.circleMarker(latlng, style(feature));
}

// Function to determine color based on feature properties
function getIcon(type) {
  switch (type) {
    case 'Boat Dealer':
    case 'Dollar Store':
    case 'Retail Store':
      return retailIcon; 
    case 'Dam':
      return damIcon; 
    case 'Restaurant':
    case 'Cafe':
      return restaurantIcon;
    case 'Gas Station':
      return fillingstationIcon;
    case 'Recreation/Golf':
      return golfIcon;
    case 'Recreation/Ball Fields':
    case 'Recreation/Playgrounds':
      return forestIcon;
    case 'Farm':
      return farmIcon;
    case 'Lake Marina':
      return lakeMarinaIcon;
    default: return '#00FF00'; // Green for others
  }
}

function addPlaces(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, { icon: getIcon(feature.properties.Type) }).bindPopup('<strong>'+feature.properties.Name+'</strong>' + '<br />  <a href="'+feature.properties.google_location+'" target ="_blank">Google Maps</a>').openPopup();
        }
      }).addTo(map);
    })
    .catch((error) => console.error('Error loading GeoJSON:', error));
}

function addAccess(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, { icon: accessIcon});
        }
      }).addTo(map);
    })
    .catch((error) => console.error('Error loading GeoJSON:', error));
}

function addStreamgages(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          // return L.marker(latlng, { icon: streamgageIcon});
          return L.marker(latlng, { icon: streamgageIcon }).bindPopup('<strong>Streamgage: '+feature.properties.SID +'</strong><br /><br />'+feature.properties.Name+ '<br />  <a href="'+feature.properties.USGS_url+'" target ="_blank">USGS Streamgage Website</a>').openPopup();
        }
      }).addTo(map);
    })
    .catch((error) => console.error('Error loading GeoJSON:', error));
}

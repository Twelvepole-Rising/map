var map;

function initializeMap() {
    map = L.map('map').setView([38.280235, -82.452734], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | <a href=" https://mapicons.mapsmarker.com" target="_blank">Maps Icons Collection</a> ',
    }).addTo(map);

    // Add a scale control with options
    L.control.scale({
        position: 'bottomleft', // Position of the scale control
        maxWidth: 200,          // Maximum width of the scale control in pixels
        metric: false,           // Display metric scale
        imperial: true         // Do not display imperial scale
    }).addTo(map);
}


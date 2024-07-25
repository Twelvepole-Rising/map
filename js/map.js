var map;

function initializeMap() {
    map = L.map('map').setView([38.280235, -82.452734], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | <a href=" https://mapicons.mapsmarker.com" target="_blank">Maps Icons Collection</a> ',
    }).addTo(map);
}
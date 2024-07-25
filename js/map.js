var map;

function initializeMap() {
    map = L.map('map').setView([38.280235, -82.452734], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | <a href="https://mapicons.mapsmarker.com" target="_blank">Maps Icons Collection</a> ',
    }).addTo(map);

    // Add a scale control with options
    L.control.scale({
        position: 'bottomleft', // Position of the scale control
        maxWidth: 200,          // Maximum width of the scale control in pixels
        metric: false,           // Display metric scale
        imperial: true         // Do not display imperial scale
    }).addTo(map);

    var customControl = L.Control.extend({
        options: {
            position: 'topright'
        },
        onAdd: function () {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "url('./images/icons/TwelvepoleRising_Icon.png')";
            container.style.backgroundSize = "73px 73px"; // Adjust size accordingly
            container.style.width = '73px';
            container.style.height = '73px';
            container.style.cursor = 'pointer';

            container.onclick = function () {
                document.getElementById('popup').style.display = 'block';
                document.getElementById('overlay').style.display = 'block';
            }

            return container;
        }
    });

    map.addControl(new customControl());


}


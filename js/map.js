var map;

function initializeMap() {
    map = L.map('map').setView([38.2505397, -82.4420135], 13);
   
    map.attributionControl.setPrefix(
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a scale control with options
    L.control.scale({
        position: 'bottomleft', 
        maxWidth: 200,          
        metric: false,           
        imperial: true         
    }).addTo(map);

    var customControl = L.Control.extend({
        options: {
            position: 'topright'
        },
        onAdd: function () {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "url('./images/icons/TwelvepoleRising_Icon.png')";
            container.style.backgroundSize = "73px 73px"; 
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


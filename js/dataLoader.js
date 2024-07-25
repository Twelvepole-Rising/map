function loadGeoJSON(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {           
            L.geoJSON(data, {
                style: function (feature) {
                    // Define a color scheme for each segment or other properties
                    var segmentColors = {
                        1: '#73FFDF',
                        2: '#55FF00',
                        3: '#A900E6',
                        4: '#FFFF00',
                        5: '#FF0000'
                    };
                    return {
                        color: segmentColors[feature.properties.segment] || 'black',
                        weight: 5
                    };
                },
                pointToLayer: function (feature, latlng) {
                    var icons = {
                        "Dam": damIcon,
                        "Combined Access": combinedaccessIcon,
                        'Boat Dealer': retailIcon,
                        'Dollar Store': retailIcon,
                        'Retail Store': retailIcon,
                        'Restaurant': restaurantIcon,
                        'Cafe': restaurantIcon,
                        'Gas Station': fillingstationIcon,
                        'Recreation/Golf': golfIcon,
                        'Recreation/Ball Fields': baseballIcon,
                        'Recreation/Playgrounds': forestIcon,
                        'Farm': farmIcon,
                        'Lake Marina': lakeMarinaIcon,
                        'Streamgage': streamgageIcon ,
                        'Takeout': takeoutIcon,
                        'Portage Takeout': takeoutIcon
                    };
                    return L.marker(latlng, { icon: icons[feature.properties.Type] || new L.Icon.Default() });
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.segment) {
                        layer.bindPopup('<strong>Creek Segment #' + feature.properties.segment +'</strong><br /> Approx. '+ feature.properties.segment_length_miles+' (mi)');
                    }
                    else if (feature.properties && feature.properties.Type == "Streamgage"){
                        layer.bindPopup('<strong>Streamgage: ' + feature.properties.SID + '</strong><br /><br />' + feature.properties.Name + '<br />  <a href="' + feature.properties.USGS_url + '" target ="_blank">USGS Streamgage Website</a>');
                    }
                    else if (feature.properties && ["Combined Access", "Takeout", "Portage Takeout"].includes(feature.properties.Type)){
                        layer.bindPopup(((feature.properties.Type) == 'Combined Access' ?  'Creek Access Spot': 'Creek Takeout Spot') + '<br /> <a href="'+ feature.properties.google_location + '" target ="_blank">Google Maps</a>');
                    }
                    else if (feature.properties && feature.properties.google_location){
                        layer.bindPopup('<strong>' + feature.properties.Name + '</strong>' + '<br />  <a href="' + feature.properties.google_location + '" target ="_blank">Google Maps</a>');
                    }
                }
            }).addTo(map);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
}

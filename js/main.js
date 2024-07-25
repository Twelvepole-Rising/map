const riverAccess = 'data/Twelvepole_Access_v2.geojson'
const places = 'data/Twelvepole_Places_v2.geojson'
const streamgages = 'data/Twelvepole_streamgages.geojson'
const creek_centerline = 'data/Twelvepole_centerline_segments.geojson'

// Main entry point
document.addEventListener('DOMContentLoaded', function() {
  initializeMap();

  // Load GeoJSON files
  loadGeoJSON('data/tpAccessPoints.geojson');
  loadGeoJSON('data/tpCenterline.geojson');
  loadGeoJSON('data/tpPOI.geojson');

});


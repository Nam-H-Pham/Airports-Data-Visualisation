// Vega-Lite map specification

window.onload = function() {
    mapSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      
        "width": 800,
        "height": 800,
      
        "layer": [
          {
            "data": {
              "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/world-110m.json",
              "format": {
                "type": "topojson",
                "feature": "countries"
              }
            },
            "projection": {
              "type": "equalEarth"
            },
            "mark": {
              "type": "geoshape",
              "fill": "lightgray",
              "stroke": "white"
            }
          },


          {
            "data": {
              "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/airport_locations.csv"
            },
            "projection": {
              "type": "equalEarth"
            },
            "mark": "circle",
            "encoding": {
              "longitude": {
                "field": "longitude",
                "type": "quantitative"
              },
              "latitude": {
                "field": "latitude",
                "type": "quantitative"
              },
              "size": {"value": 6},
              "color": {"value": "steelblue"}
            }
          }
        ]
      }
      
      
      

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map-airport-locations", mapSpec);
}

// Vega-Lite map specification

window.onload = function() {
    mapSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 800,
        "height": 800,
        "data": {
          "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/world-110m.json",
          "format": {
            "type": "topojson",
            "feature": "countries"
          }
        },

        "transform": [{
          "lookup": "id",

          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/airports_per_million.csv"
            },
            "key": "id",
            "fields": ["Tier"]
          }

        }],
        
        "projection": {
          "type": "mercator"
        },
        
        "mark": "geoshape",
        "encoding": {
          "color": {
            "field": "Tier",
            "title": "Airports Per One Million People",
            "type": "quantitative",

            "legend": {
                "labelExpr": "datum.label == '1' ? '<1': datum.label == '2' ? '1-5' : datum.label == '3' ? '5-10' : datum.label == '4' ? '10-15' : datum.label == '5' ? '15-20' : datum.label == '6' ? '20-30' : datum.label == '7' ? '30-40' : datum.label == '8' ? '40-100' : datum.label == '9' ? '100-500' : datum.label == '10' ? '500-1000' : '>1000'",
              },

            "bin": true
          }
        }
      }
      

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map-airports-per-million", mapSpec);
}

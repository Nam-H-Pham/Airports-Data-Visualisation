// Vega-Lite map specification

window.onload = function() {
    // var mapSpec = {
    //     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    //     "description": "A map with all countries in gray",
    //     "width": 800,
    //     "height": 800,
        
        
    //     "data": {
    //         "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/world-110m.json",
    //             "format": {
    //                 "type": "topojson",
    //                 "feature": "countries"
    //             }
    //         },

    //     "transform": [{
    //         "lookup": "id",
    //         "from": {
    //             "data": {
    //             "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/map.csv"
    //             },
    //             "key": "id",
    //             "fields": ["Tier"]
    //         }
    //         }],
        
    //     "projection": { "type": "mercator" },

    //     "mark": "geoshape",

    //     "encoding": {
    //         "color": {
    //             "value": "Tier", // Use a single gray color for all countries
    //             "type": "quantitative"
    //         }
    //     },

    //     };

    mapSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 900,
        "height": 900,
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
              "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/map.csv"
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
            "type": "nominal",
            "legend": {"values":["<1", "1-5", "5-10", "10-15", "15-20", "20-30", "30-40", "40-100", "100-500"]},
            "scale": {
                "range": ["white", "blue"],
              },
          }
        }
      }
      

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map", mapSpec);
}

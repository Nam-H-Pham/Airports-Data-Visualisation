// Vega-Lite map specification

window.onload = function() {
    Airport_Locations_Map_Spec = {
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

    Airports_Per_Million_Map_Spec = {
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

    Airport_type_distribution_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A simple radial chart with embedded data.",
    
      "width": 400,
      "height": 400,
    
    
      "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/airport_types.csv"},
    
      "params": [
        { 
          "name": "Choice", 
          "value": "North America",
          "bind": {"input": "select", "options":  ["North America", "South America", "Europe", "Oceania", "Asia", "Africa", "Antarctica"]}
        }
      ],
    
      "transform": [{"filter": "datum.Continent == Choice"}],
    
      "layer": [{
        "mark": {"type": "arc", "innerRadius": 20, "stroke": "#fff"}
      },{
        "mark": {"type": "text", "radiusOffset": 10},
        "encoding": {
          "text": {"field": "Count", "type": "quantitative"}
        }
      }],
      "encoding": {
        "theta": {"field": "Count", "type": "quantitative", "stack": true},
        "radius": {"field": "Count", "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}},
        "color": {"field": "Type", "type": "nominal", 
        "legend": {"values": "Type"}
        }
      }
    }
      

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map-airport-locations", Airport_Locations_Map_Spec);
    vegaEmbed("#world-map-airports-per-million", Airports_Per_Million_Map_Spec);
    vegaEmbed("#radial-plot-airport-types", Airport_type_distribution_Spec);
}

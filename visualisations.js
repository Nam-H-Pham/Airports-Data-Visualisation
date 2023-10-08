// Vega-Lite map specification

window.onload = function() {
    Airport_Locations_Map_Spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
          "text": "Airport Locations 2023",
          "anchor": "start"
        },
      
        "width": 800,
        "height": 400,
      
        "layer": [

          {
            "data": {"sphere": true},
            "mark": {"type": "geoshape", "fill": "aliceblue"}
          },
          
          {
            "data": {"graticule": {"stepMinor": [15, 15]}},
            "mark": "geoshape",
            "encoding": {
              "color": {"value": "#cccccc"}
            }
          },
  
          {
            "mark": {"type": "geoshape", "stroke": "black"},
            "encoding": {
              "color": { 
                "value": "gray",
              },
            }
          },

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
              "stroke": "black"
            }
          },
            

          {
            "data": {
              "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport_locations.csv"
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
              "size": {"value": 7},
              "color": {"value": "steelblue"},

              "tooltip": [
                {"field": "Id", "type": "nominal"},
                {"field": "latitude", "type": "quantitative"},
                {"field": "longitude", "type": "quantitative"}
              ]
            }
          }
        ]
      }

    Airports_Per_Million_Map_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": {
        "text": "Airports Per One Million People 2023",
        "anchor": "start"
      },

      "width": 600,
      "height": 400,

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


      "transform": [{
        "lookup": "id",

        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airports_per_million.csv"
          },
          "key": "id",
          "fields": ["Tier", "Iso Code", "Airports Per Million"]
        }

      }],

      "layer": [

        {
          "data": {"sphere": true},
          "mark": {"type": "geoshape", "fill": "aliceblue"}
        },
        
        {
          "data": {"graticule": {"stepMinor": [15, 15]}},
          "mark": "geoshape",
          "encoding": {
            "color": {"value": "#cccccc"}
          }
        },

        {
          "mark": {"type": "geoshape", "stroke": "black"},
          "encoding": {
            "color": { 
              "value": "gray",
            },
          }
        },

        {
          "mark": {"type": "geoshape", "stroke": "black"},
          "encoding": {
            "color": {
              "field": "Tier",
              "title": "Airports Per One Million People",
              "type": "quantitative",

              "legend": {
                  "labelExpr": "datum.label == '1' ? '<1': datum.label == '2' ? '1-5' : datum.label == '3' ? '5-10' : datum.label == '4' ? '10-15' : datum.label == '5' ? '15-20' : datum.label == '6' ? '20-30' : datum.label == '7' ? '30-40' : datum.label == '8' ? '40-100' : datum.label == '9' ? '100-500' : datum.label == '10' ? '500-1000' : '>1000'",
                },

              "bin": true,
            },

            "tooltip": [
              {"field": "Iso Code", "type": "nominal"},

              {"field": "Airports Per Million", "type": "quantitative", "format": ".2f"}
            ]
          }
        }
      ],
}


    Airport_Type_Distribution_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A simple radial chart with embedded data.",

      "title": {
        "text": "Airport Types Across Continents 2023",
        "anchor": "start"
      },
    
      "width": 300,
      "height": 350,
      "background": "#f4f4f4",
    
    
      "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport_types.csv"},
    
      "params": [
        { 
          "name": "Continent", 
          "value": "All",
          "bind": {"name": "Continent: ", "input": "select", "options":  ["All", "Asia", "Africa", "Antarctica", "Europe", "Oceania", "North America", "South America"]},

        }
      ],
    
      "transform": [{"filter": "datum.Continent == Continent"}],
    
      "layer": [
        {
        "mark": {"type": "arc", "innerRadius": 20, "stroke": "#fff"},
        "encoding": {"tooltip": [
                      {"field": "Type", "type": "nominal", "title": "Airport Type"},
                      {"field": "Count", "type": "quantitative", "title": "Number of Airports", "format": ",.2s"}
                    ]}
        },

        {
          "mark": {"type": "text", "radiusOffset": 30},
          "encoding": {
                        "text": {"field": "Count", 
                        "type": "quantitative", 
                        "format": ",.2s"
                      }
          }
        },
      ],

      "encoding": {
        "theta": {"field": "Count", "type": "quantitative", "stack": true},
        "radius": {"field": "Count", "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}},
        "color": {"field": "Type", "type": "nominal", 
        "legend": {"values": "Type"},

        }
      }
    }

    Airport_Continents_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A scatterplot showing different types of airports in different continents.",
      "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airports_continents.csv"},

      "width": 600,
      "height": 400,
    
      "layer": [
        {
          "mark": "point",
          "encoding": {
            "x": {"field": "Region", "type": "ordinal"},
            "y": {"field": "Airports", "type": "quantitative"}}
        },
      ]
    }

    Airport_Top_Countries_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A simple bar chart with embedded data.",
      "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/top_countries.csv"},
    
      "width": 600,
      "height": 300,
    
      "layer": [
    
        {
          "mark": {"type": "bar", "width": 5, "color": "#d8b36a"},
          "encoding": {
            "x": {"field": "Name", "type": "nominal", 
                  "axis": {"labelAngle": 0},
                  "sort": null,
                  "title": "Country"
                  },
            "y": {"field": "Value", "type": "quantitative", "title": "Number of Airports"}
          }
        },
    
        {
              "mark": {"type": "circle", "size": 200, "color": "#d8b36a"},
              "encoding": {
                "x": {"field": "Name", 
                      "type": "ordinal",
                      "sort": null
                      },
                "y": {"field": "Value", "type": "quantitative"}
                },
        },
    
      ]
    }

    Airport_Routes_Map_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "An interactive visualization of connections among major U.S. airports in 2008. Based on a U.S. airports example by Mike Bostock.",
      "width": 600,
      "height": 400,

      "title": {
        "text": "Global Airport Routes 2023",
        "anchor": "start"
      },
      
      "layer": [

        {
          "data": {"sphere": true},
          "mark": {"type": "geoshape", "fill": "aliceblue"}
        },
        
        {
          "data": {"graticule": {"stepMinor": [15, 15]}},
          "mark": "geoshape",
          "encoding": {
            "color": {"value": "#cccccc"}
          }
        },

        {
          "mark": {
            "type": "geoshape",
            "fill": "lightgray",
            "stroke": "black",
            "strokeWidth": 1
          },
          "data": {
            "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/world-110m.json",
            "format": {"type": "topojson", "feature": "countries"}
          }
        },
        {
          "mark": {"type": "circle"},
          "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport-routes.csv"},
          "transform": [
            {"aggregate": [{"op": "count", "as": "routes"}], "groupby": ["origin"]},
            {
              "lookup": "origin",
              "from": {
                "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport-routes-locations.csv"},
                "key": "iata",
                "fields": ["id", "latitude", "longitude", "iata"]
              }
            }
          ],
          "params": [{
            "name": "org",
            "select": {
              "type": "point",
              "on": "mouseover",
              "nearest": true,
              "fields": ["origin"]
            },
            "bind": {"input": "text", "placeholder": "SYD", "name": "Airport by IATA Code: "}

          }],
          "encoding": {
            "latitude": {"field": "latitude"},
            "longitude": {"field": "longitude"},
            "size": {
              "field": "routes",
              "type": "quantitative",
              "legend": null
            },
            "order": {
              "field": "routes",
              "sort": "descending"
            },
            "color": {"value": "steelblue"},
            "tooltip": [
              {"field": "iata", "type": "nominal", "title": "Airport"},
              {"field": "routes", "type": "quantitative", "title": "Number of routes"}
            ]
          }
        },

        {
          "mark": {"type": "rule", "color": "red", "opacity": 0.35},
          "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport-routes.csv"},
          "transform": [
            {"filter": {"param": "org", "empty": false}},
            {
              "lookup": "origin",
              "from": {
                "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport-routes-locations.csv"},
                "key": "iata",
                "fields": ["latitude", "longitude"]
              }
            },
            {
              "lookup": "destination",
              "from": {
                "data": {"url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport-routes-locations.csv"},
                "key": "iata",
                "fields": ["latitude", "longitude"]
              },
              "as": ["lat2", "lon2"]
            }
          ],
          "encoding": {
            "latitude": {"field": "latitude"},
            "longitude": {"field": "longitude"},
            "latitude2": {"field": "lat2"},
            "longitude2": {"field": "lon2"}
          }
        },
      ],
      "projection": {"type": "equalEarth"},
      "width": 900,
      "height": 500
    }
    

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map-airport-locations", Airport_Locations_Map_Spec);
    vegaEmbed("#world-map-airports-per-million", Airports_Per_Million_Map_Spec);
    vegaEmbed("#radial-plot-airport-types", Airport_Type_Distribution_Spec);
    vegaEmbed("#scatter-plot-airport-continents", Airport_Continents_Spec);
    vegaEmbed("#lollipop-plot-airport-top-countries", Airport_Top_Countries_Spec);
    vegaEmbed("#world-map-airports-routes", Airport_Routes_Map_Spec);
}

// Vega-Lite map specification

window.onload = function() {
    Airport_Locations_Map_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A dot distribution map of the locations of airports in 2023.",
      "title": {
        "text": "Airport Location Distribution 2023",
        "anchor": "middle"
      },
    
      "width": 700,
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
          "url": "https://raw.githubusercontent.com/Nam-H-Pham/Airports-Data-Visualisation/main/data/countries_counts.csv"
        },
        "key": "id",
        "fields": ["Number of Airports", "Country"]
      }

    },
    ],


    
      "layer": [

        {
          "data": {
            "values": [
              {"Surface": "Ocean", "type": "nominal"},
              {"Surface": "Land", "type": "nominal"},
            ]
          },
          "mark": {"type": "geoshape", "stroke": "gray"},
          "encoding": {
            "color": {
              "field": "Surface",
              "legend": {
                "title": ""
              },
              "scale": {
                "range": ["steelblue", "lightgray", "aliceblue"]
              }
            }
          }
        },

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
            "stroke": "black"
          },
          "encoding": {
            "tooltip": [
              {"field": "Country", "type": "nominal"},
              {"field": "Number of Airports", "type": "quantitative", "format": ",.2s"}
            ]
          }
        },
        
          

        {
          "data": {
            "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/airport_locations.csv"
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
            "size": {"value": 4},
            "color": {
                "value": "steelblue",
                "datum": "Id",
                "legend": {

                  "symbolType": "circle",
                  
                  "title": "Legend",
                  "orient": "right",
                  "titleAnchor": "middle",
                  "labelExpr": "datum.label == 'Id' ? 'Airport Location': datum.label == 'Ocean' ? 'Ocean': datum.label == 'Land' ? 'Land':'None'",

                }
            },

          }
        },

      
      ]
    }

    Airports_Per_Million_Map_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "A choropleth map of the number of airports per million people in 2023.",
      "title": {
        "text": "Airports Per One Million People 2023",
        "anchor": "middle"
      },

      "width": 700,
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

      },

      {
        "lookup": "id",
  
        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/Nam-H-Pham/Airports-Data-Visualisation/main/data/countries_counts.csv"
          },
          "key": "id",
          "fields": ["Number of Airports", "Country"]
        }
  
      },
    
      ],

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
              "title": ["Airports Per","Million People"],
              "type": "quantitative",

              "legend": {
                  "labelExpr": "datum.label == '1' ? '<1': datum.label == '2' ? '1-5' : datum.label == '3' ? '5-10' : datum.label == '4' ? '10-15' : datum.label == '5' ? '15-20' : datum.label == '6' ? '20-30' : datum.label == '7' ? '30-40' : datum.label == '8' ? '40-100' : datum.label == '9' ? '100-500' : datum.label == '10' ? '500-1000' : '<1'",
                  "direction": "vertical",
                },

              "bin": true,
            },

            "tooltip": [
              {"field": "Country", "type": "nominal"},

              {"field": "Airports Per Million", "type": "quantitative", "format": ".2f"}
            ]
          }
        },

        {
          "data": {
            "values": [
              {"Surface": "No Data", "type": "nominal"},
              {"Surface": "Ocean", "type": "nominal"},
            ]
          },
          "mark": {"type": "geoshape", "stroke": "gray"},
          "encoding": {
            "color": {
              "field": "Surface",
              "legend": {
                "symbolType": "square",
                "title": ""
              },
              "scale": {
                "range": [ "gray", "aliceblue"]
              }
            }
          }
        },
      ],
}


    Airport_Type_Distribution_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "An interactive radial chart of the number of airports by type per continent in 2023.",

      "title": {
        "text": "Number of Airports by Type Per Continent 2023",
        "anchor": "middle"
      },
    
      "width": 320,
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
          "encoding": {
                        "tooltip": [
                              {"field": "Type", "type": "nominal", "title": "Airport Type"},
                              {"field": "Count", "type": "quantitative", "title": "Number of Airports", "format": ",.2s"}
                            ],
  
                        "color": {
                            "field": "Type",
                            "scale": {"range": ["purple", "#4c78a8", "#f58518", "#72b7b2", "#54a24b"]}
                          }
  
                      } 
          },

        {
          "mark": {"type": "text", "radiusOffset": 30, "fontSize": 16},
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
        "legend": {
                      "values": "Type",
                      "orient": "bottom",
                      "direction": "horizontal",
                      "titleAlign": "center",
                      "titleAnchor": "left",
                  },
        },
        
      }
    }


    Airport_Routes_Map_Spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "An interactive visualization of connections among global airports in 2017.",
      "width": 600,
      "height": 400,

      "title": {
        "text": "Global Airport Routes 2017",
        "anchor": "middle"
      },
      
      "layer": [

        {
          "data": {
            "values": [
              {"Surface": "Land", "type": "nominal"},
              {"Surface": "Ocean", "type": "nominal"},
            ]
          },
          "mark": {"type": "geoshape", "stroke": "gray"},
          "encoding": {
            "color": {
              "field": "Surface",
              "legend": {
                "symbolType": "square",
                "title": "Legend"
              },
              "scale": {
                "range": [ "lightgray", "aliceblue"]
              }
            }
          }
        },

        {
          "data": {
            "values": [
              {"Surface": "Route", "type": "nominal"},
            ]
          },
          "mark": {"type": "geoshape", "stroke": "red"},
          "encoding": {
            "color": {
              "field": "Surface",
              "legend": {
                "symbolType": "stroke",
                "title": ""
              },
            }
          }
        },

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
          "mark": {"type": "circle", "opacity": 0.5},
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
              "fields": ["origin"]
            },
            "bind": {"input": "text", "placeholder": "SYD", "name": "Airport of Origin by IATA Code (E.g. MEL): "}

          }],
          "encoding": {
            "latitude": {"field": "latitude"},
            "longitude": {"field": "longitude"},
            "size": {
              "field": "routes",
              "type": "quantitative",
              
              "legend": {

                "title": "Number of Routes Hosted",
                "orient": "none",
                "direction": "horizontal",
                "titleAlign": "center",
                "titleAnchor": "left",
                
                "legendX": 380,
                "legendY": 490,

              }
            },
            "order": {
              "field": "routes",
              "sort": "descending"
            },
            "color": {
              "field": "routes",
              "scale": {
                "type": "linear",
                "range": ["steelblue", "blue", "purple"],
              },
              "legend": {
                "title": ["Number of ","Routes Hosted"],
              },
          },
            "tooltip": [
              {"field": "iata", "type": "nominal", "title": "Airport IATA Code"},
              {"field": "routes", "type": "quantitative", "title": "Number of routes"}
            ]
          }
          
        },

        {
          "mark": {"type": "rule", "color": "red", "opacity": 0.2 ,"strokeWidth": 0.7},
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
          },
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
    vegaEmbed("#world-map-airports-routes", Airport_Routes_Map_Spec);
}

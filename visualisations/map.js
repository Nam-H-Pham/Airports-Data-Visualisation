// Vega-Lite map specification

window.onload = function() {
    var mapSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A map with all countries in gray",
        "width": 400,
        "height": 300,
        
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
                "type": "mercator"
                },
                "mark": "geoshape",
                "encoding": {
                "color": {
                    "value": "gray" // Use a single gray color for all countries
                }
                }
            },

            {
            "data": {
                "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/volcanoes.csv"
            },
            "projection": {
                "type": "mercator",
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
                "size": {"value": 10},

                "color": {"value": "blue"},

                "tooltip": [
                {"field": "Region"},
                {"field": "Volcano Name"},
                {"field": "latitude"},
                {"field": "longitude"},
                ]
            },
            },

            {
            "data": {
                "url": "https://raw.githubusercontent.com/Nam-H-Pham/Earthquakes-Visualisation/main/data/earthquakes.csv"
            },
            "projection": {
                "type": "mercator"
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


                // "size": {"value": 2},

                "size": {
                        "value": 2
                        },

                "color": {
                "value": "red",
                },

                "tooltip": [
                {"field": "latitude"},
                {"field": "longitude"},
                {"field": "Magnitude"},
                ]
            }
            }
        ]
        };

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map", mapSpec);
}

// Vega-Lite map specification

window.onload = function() {
    var mapSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A map with all countries in gray",
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
                "projection": { "type": "mercator" },

    

                "mark": "geoshape",
                "encoding": {
                "color": {
                    "value": "gray" // Use a single gray color for all countries
                }
                }
            },
        ]
        };

    // Embed the map specification in the "map" div
    vegaEmbed("#world-map", mapSpec);
}
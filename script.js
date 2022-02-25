require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90.422, 38.644],
        zoom: 10
      });
      var template = {
        title: "School District: {SCHOOL_DISTRICT}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "OBJECTID",
            label: "ID: ",
            visible: true
          }, {
            fieldName: "SCHOOLCODE",
            label: "Code: ",
            visible: true
          }
                      ]
        }]
      };
      var featureLayer = new FeatureLayer({
        url: "http://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/4",
        outFields: ["*"],
        popupTemplate: template
      });
  
      map.add(featureLayer);
    });

import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";


import "cesium/Build/Cesium/Widgets/widgets.css"
import "../src/css/main.css"
import "../src/css/flexconf.css"
import pie from './pie';
import bar from './bar';
import chart from './chart';
import tablescript from './table';

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNWE2ZjNhYi05M2NkLTRkMWEtYjIzMi1hNGUyN2U4ZWNiYjYiLCJpZCI6MTI0NDQ3LCJpYXQiOjE2NzY0MzI3MjZ9.AC5bGuCelyqPyJIZ45NjODXrWJO6FBsvP8rY-ci5w2Q';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrainProvider: createWorldTerrain()
});
const entities = Viewer.entities;

// Add Cesium OSM Buildings, a global 3D buildings layer.
// viewer.scene.primitives.add(createOsmBuildings());   

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(147.2878, -19.7050, 1200),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-60.0),
  }
});


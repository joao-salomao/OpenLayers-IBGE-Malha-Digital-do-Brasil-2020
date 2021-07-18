import { Map, View } from 'ol';
import dataLayers from './layers/data'
import tileLayer from './layers/tile';
import LayersControl from './controls/LayersControl'
import { defaults as defaultControls } from 'ol/control';

new Map({
  controls: defaultControls().extend([new LayersControl(dataLayers)]),
  layers: [
    tileLayer,
    ...dataLayers
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
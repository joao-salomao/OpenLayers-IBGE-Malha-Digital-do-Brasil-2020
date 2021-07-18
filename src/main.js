import { Map, View } from 'ol';
import dataLayers from './layers/data'
import tileLayer from './layers/tile';

new Map({
  target: 'map',
  layers: [
    tileLayer,
    ...dataLayers
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
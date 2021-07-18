import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

const styles = {
    'LineString': new Style({
        stroke: new Stroke({
            color: 'green',
            width: 1,
        }),
    }),
    'MultiLineString': new Style({
        stroke: new Stroke({
            color: 'green',
            width: 1,
        }),
    }),
    'MultiPolygon': new Style({
        stroke: new Stroke({
            color: 'yellow',
            width: 1,
        }),
        fill: new Fill({
            color: 'rgba(255, 255, 0, 0.1)',
        }),
    }),
    'Polygon': new Style({
        stroke: new Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3,
        }),
        fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)',
        }),
    }),
    'GeometryCollection': new Style({
        stroke: new Stroke({
            color: 'magenta',
            width: 2,
        }),
        fill: new Fill({
            color: 'magenta',
        }),
        image: new CircleStyle({
            radius: 10,
            fill: null,
            stroke: new Stroke({
                color: 'magenta',
            }),
        }),
    }),
    'Circle': new Style({
        stroke: new Stroke({
            color: 'red',
            width: 2,
        }),
        fill: new Fill({
            color: 'rgba(255,0,0,0.2)',
        }),
    }),
};

const styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()];
};

const SC_UF_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_UF_2020.json'
    }),
    style: styleFunction,
})

const SC_RG_IMEDIATAS_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_RG_Imediatas_2020.json'
    }),
    style: styleFunction,
})

const SC_MUNICIPIOS_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_Municipios_2020.json'
    }),
    style: styleFunction,
})

const SC_MESORREGIOES_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_Mesorregioes_2020.json'
    }),
    style: styleFunction,
})

const SC_MICRORREGIOES_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_Microrregioes_2020.json'
    }),
    style: styleFunction,
})

const SC_RG_INTERMEDIARIAS_2020 = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: '../data/SC_RG_Intermediarias_2020.json'
    }),
    style: styleFunction,
})


export default [
    SC_UF_2020,
    SC_RG_IMEDIATAS_2020,
    SC_MUNICIPIOS_2020,
    SC_MESORREGIOES_2020,
    SC_MICRORREGIOES_2020,
    SC_RG_INTERMEDIARIAS_2020
]
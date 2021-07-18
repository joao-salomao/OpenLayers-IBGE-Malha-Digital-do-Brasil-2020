import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

const layers = [
    'UF',
    'RG_IMEDIATAS',
    'MUNICIPIOS',
    'MESORREGIOES',
    'MICRORREGIOES',
    'RG_INTERMEDIARIAS'
].map((fileName) => {   
    const layer = new VectorLayer({
        visible: false,
        source: new VectorSource({
            format: new GeoJSON(),
            url: `../data/SC_${fileName}_2020.json`
        }),
    })

    layer.set('name', fileName)

    return layer
})


export default layers
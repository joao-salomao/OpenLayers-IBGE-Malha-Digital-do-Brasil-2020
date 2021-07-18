import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default new TileLayer({
    source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
})
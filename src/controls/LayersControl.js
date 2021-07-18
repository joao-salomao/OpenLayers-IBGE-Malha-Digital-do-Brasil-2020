
import { Control } from 'ol/control';

export default class RotateNorthControl extends Control {
    constructor(layers) {
        const mainElement = document.createElement('div');
        mainElement.style.display = 'flex'
        mainElement.style.maxWidth = '160px'
        mainElement.style.flexDirection = 'column'

        layers.forEach((layer) => {
            const input = document.createElement('button');
            input.innerHTML = layer.get('name') + ' (Off)';

            mainElement.appendChild(input);

            input.addEventListener('click', () => {
                const newValue = !layer.get('visible')
                layer.setVisible(newValue)

                if (newValue) {
                    input.innerHTML = layer.get('name') + ' (On)';
                } else {
                    input.innerHTML = layer.get('name') + ' (Off)';
                }
            });
        })

        super({
            element: mainElement,
        });
    }
}

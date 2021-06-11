import { BaseComponent } from '../base-component';
import { ButtonImage } from '../button-load-image/button-image';
import './adder.scss';
import '../button/button.scss';
import { ButtonJSON } from '../button-load-JSON/button-JSON';

export class Adder extends BaseComponent {
  constructor() {
    super('div', ['add-field__inner']);

    const input = new BaseComponent('input', ['add-field__input']);
    input.element.setAttribute('placeholder', 'Ссылка на картинку...');
    this.element.appendChild(input.element);

    const btnJson = new ButtonJSON();
    btnJson.element.setAttribute('data-type', 'input');

    this.element.appendChild(new ButtonImage().element);
    this.element.appendChild(btnJson.element);
  }
}

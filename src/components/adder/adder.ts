import { BaseComponent } from "../base-component";
import { ButtonImage } from "../button-load-image/button-image";
import { ButtonJSON } from "../button-load-JSON/button-JSON";
import './adder.scss'

export class Adder extends BaseComponent {
  constructor() {
    super('div', ['add-field__inner']);

    const input = new BaseComponent('input', ['add-field__input'])
    input.element.setAttribute('placeholder', 'Ссылка на картинку...')
    this.element.appendChild(input.element)

    this.element.appendChild(new ButtonImage().element)
    this.element.appendChild(new ButtonJSON().element)

  }
}

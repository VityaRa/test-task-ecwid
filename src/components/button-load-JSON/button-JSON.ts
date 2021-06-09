import { BaseComponent } from "../base-component";
import { Button } from "../button/button";
import './button-JSON.scss'

export class ButtonJSON extends Button {
  constructor() {
    super('Загрузить JSON файл', ['btn__json']);
    this.element.addEventListener('click', () => console.log())
  }
}

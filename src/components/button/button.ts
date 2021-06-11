import { BaseComponent } from "../base-component";
import './button.scss'

export class Button extends BaseComponent {
  constructor(text: string, extraClasses: string[]) {
    super('button', ['btn']);
    this.element.textContent = text
    this.element.classList.add(...extraClasses)
  }
}

import { BaseComponent } from "../base-component";
import { Button } from "../button/button";
import './button-image.scss'


const getImageFromURL = () => {

}

export class ButtonImage extends Button {
  constructor() {
    super('Загрузить!', ['btn__image']);
    this.element.addEventListener('click', () => console.log())
  }
}

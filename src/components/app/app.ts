import { Adder } from '../adder/adder';
import { BaseComponent } from '../base-component';
import { ImagesList } from '../images-list/images-list';
import './app.scss';

export class App extends BaseComponent {
  private adderContainer: BaseComponent = new BaseComponent('header', [
    'add-field__container',
  ]);
  private galaryContainer: BaseComponent = new BaseComponent('div', [
    'galary-container',
  ]);

  constructor() {
    super('main', ['app']);

    const adder = new Adder();
    const imagesList = new ImagesList();

    this.adderContainer.element.appendChild(adder.element);
    this.galaryContainer.element.appendChild(imagesList.element);

    this.element.appendChild(this.adderContainer.element);
    this.element.appendChild(this.galaryContainer.element);


  }
}

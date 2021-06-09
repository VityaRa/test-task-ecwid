import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './button-image.scss';

// const getImageFromURL = () => {
//   const inputElem = <HTMLInputElement>document.querySelector('input')
//   if (inputElem) {
//     const url = inputElem.value

//     try {
//       fetch(url)
//       .then(ans => ans.blob())
//       .then(image => {
//         const event = new CustomEvent("AddImage", {
//           detail: {
//             url: url
//           },
//           bubbles: true
//         });
//         inputElem.dispatchEvent(event)
//       })
//     } catch (e) {
//       alert('Ошибка!')
//     }

//   } else {
//     return
//   }
// }

export class ButtonImage extends Button {
  constructor() {
    super('Загрузить!', ['btn__image']);

    this.element.addEventListener('click', () => this.btnImageHandler());
  }

  btnImageHandler():void {
    const inputElem = <HTMLInputElement>document.querySelector('input');
    if (inputElem) {
      const url = inputElem.value;
      const event = new CustomEvent('AddImage', {
        detail: {
          url: url,
        },
        bubbles: true,
      });
      inputElem.dispatchEvent(event);
      inputElem.value = ''
    }
  }
}

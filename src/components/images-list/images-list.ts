import { BaseComponent } from '../base-component';
import './images-list.scss';

export class ImagesList extends BaseComponent {

  constructor() {
    super('div', ['galary__inner']);

    document.addEventListener('AddImage', ((event: CustomEvent) => {
      this.createImage(event.detail.url)
    }) as EventListener);

    document.addEventListener('click', (e) => {
      this.removeImage(e)
    });
  }

  createImage(imageURL: string): void {
    if (!imageURL) {
      alert('Введите URL картинки')
      return
    }
    fetch(imageURL)
      .then(ans => ans.ok ? ans : Promise.reject(ans))
      .then(ans => {
        const img = new BaseComponent('img', ['galary__inner__image'])
        img.element.setAttribute('src', imageURL);
        this.element.appendChild(img.element);
      })
      .catch(() => {
        alert('Error')
      })
  }

  removeImage(sender: MouseEvent): void {
    if ((<HTMLElement>sender.target).tagName === 'IMG') (<HTMLElement>sender.target).remove()
  }
}

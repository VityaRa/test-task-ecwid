import { BaseComponent } from '../base-component';
import './images-list.scss';

export class ImagesList extends BaseComponent {
  constructor() {
    super('div', ['galary__inner']);
    this.initListeners()
  }

  createImage(imageURL: string): void {
    if (!imageURL) {
      alert('Введите URL картинки');
      return;
    }
    fetch(imageURL)
      .then((ans) => (ans.ok ? ans : Promise.reject(ans)))
      .then((ans) => {
        const img = new BaseComponent('img', ['galary__inner__image']);
        img.element.setAttribute('src', imageURL);
        this.element.appendChild(img.element);
      })
      .catch((e) => {
        alert('Неправильный URL');
      });
  }

  removeImage(sender: MouseEvent): void {
    if ((<HTMLElement>sender.target).tagName === 'IMG')
      (<HTMLElement>sender.target).remove();
  }

  initListeners() {
    document.addEventListener('AddImage', ((event: CustomEvent) => {
      this.createImage(event.detail.url);
    }) as EventListener);

    document.addEventListener('click', (e) => {
      this.removeImage(e);
    });

    document.addEventListener('AddJSON', ((event: CustomEvent) => {
      const urlList = event.detail.obj;
      for (let url in urlList) {
        this.createImage(urlList[url].url);
      }
    }) as EventListener);

    const dropArea = document.querySelector('.galary-container')
    console.log(dropArea);

    dropArea?.addEventListener('dragenter', () => {
      console.log("dragenter");
    })
    dropArea?.addEventListener('dragleave', () => {
      console.log("dragleave");
    })
    dropArea?.addEventListener('dragover', () => {
      console.log("dragover");
    })
    dropArea?.addEventListener('drop', () => {
      console.log("drop");
    })
  }
}

import { BaseComponent } from '../base-component';
import './images-list.scss';

export class ImagesList extends BaseComponent {
  constructor() {
    super('div', ['galary__inner']);
    this.initListeners();
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

    this.eventPreventDefaults()
    this.interactiveDrag()
    this.element.addEventListener('drop', this.handleDrop, false)
  }

  handleDrop = (e:any) => {
    const dt = e.dataTransfer
    const files = <FileList>dt.files
    const urls: string[] = []


    for (let i = 0; i < files.length; i++) {
      const reader  = new FileReader();
      reader.onloadend = () => {
        const url = reader.result;
        if (url) {
          console.log(url);
          this.createImage(<string>url)
        }
      }
      reader.readAsDataURL(files[i])
    }
  }


  interactiveDrag() {
    ;['dragenter', 'dragover'].forEach(eventName => {
      this.element.addEventListener(eventName, this.highlight, false)
    })
    ;['dragleave', 'drop'].forEach(eventName => {
      this.element.addEventListener(eventName, this.unhighlight, false)
    })
  }

  highlight = (e: Event) => {
    this.element.classList.add('galary__inner__highlight')
  }

  unhighlight = (e: Event) => {
    this.element.classList.remove('galary__inner__highlight')
  }

  eventPreventDefaults() {
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((event) => {
      this.element.addEventListener(event, this.preventDefaults, false);
    });
  }

  preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };
}

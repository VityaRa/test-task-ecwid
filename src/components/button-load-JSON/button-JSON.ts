import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './button-JSON.scss';

export class ButtonJSON extends BaseComponent {
  constructor() {
    super('input', ['btn__json']);
    this.element.setAttribute('type', 'file');
    this.element.addEventListener('change', () => this.btnJsonHandler());
  }

  btnJsonHandler(): void {
    const elem = <HTMLInputElement>(document.querySelector('[data-type="input"]'));
    if (elem && elem.files && elem.files[0].type === 'application/json') {
      this.getUrlList(elem)
      elem.value = ''
    } else {
      alert('Error');
      return;
    }
  }

  getUrlList(fileList: any) {
    const file = fileList.files[0];
    const fr = new FileReader();

    const rootElem = document.querySelector('main');
    rootElem?.classList.toggle('loading');

    const loader = new BaseComponent('div', ['loader-container']);
    loader.element.innerHTML = `<div class="lds-dual-ring"></div>`;
    document.body.appendChild(loader.element);

    fr.onload = (e: any) => {
      const lines = e.target.result;
      const newArr = JSON.parse(lines);
      const event = new CustomEvent('AddJSON', {
        detail: {
          obj: newArr.galleryImages,
        },
        bubbles: true,
      });
      this.element.dispatchEvent(event);
      rootElem?.classList.toggle('loading');
      document.body.removeChild(loader.element);
    };
    fr.readAsText(file);
  }
}

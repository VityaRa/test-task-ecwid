import { App } from './components/app/app';
import './style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('body');
  if (!rootElement) {
    alert('Error...');
    return;
  }
  rootElement.appendChild(new App().element);
})

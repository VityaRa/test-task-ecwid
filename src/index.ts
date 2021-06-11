import { App } from './components/app/app';
import './style.scss';

window.onload = () => {
  const rootElement = document.querySelector('body');
  if (!rootElement) {
    alert('Error...');
    return;
  }
  rootElement.appendChild(new App().element);
};

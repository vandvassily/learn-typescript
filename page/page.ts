import { Header, Content, Footer } from './components';

export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}

const $app = $('#app');

$app.html('This is app content writen by jquery').addClass('active')

new Page();

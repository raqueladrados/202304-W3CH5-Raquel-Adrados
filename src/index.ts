/* eslint-disable no-new */
import './style.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

new Header('#app', 'The little pokemon');
new Main('#app');
new Footer('#app', 'VIOLET TOWN');

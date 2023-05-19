/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Header extends Component {
  constructor(public selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `<header class="main-header">
      <h1 class="main-title">${this.title}</h1>
    </header>`;
  }
}

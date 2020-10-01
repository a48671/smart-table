import { RootComponentOptionsTypes } from './root-component.types';
import { Component } from '../../core/component';
import { $ } from '../../core/dom';

export class RootComponent {
  private element: Element | null;
  public components: Array<typeof Component>;
  constructor(selector: string, options: RootComponentOptionsTypes) {
    this.element = document.querySelector(selector);
    this.components = options.components || [];
  }
  public getRoot() {
    const root = $.create('div', 'smart-table');
    this.components.map(Component => {
      const component = new Component();
      const element = $.create('div', Component.className);
      element.insertAdjacentHTML('beforeend', component.toHTML())
      root.append(element);
    });
    return root;
  }
  public render() {
    this.element?.append(this.getRoot());
  }
}

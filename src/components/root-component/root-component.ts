import { RootComponentOptionsTypes } from './root-component.types';
import { Component } from '../../core/component';
import { $, DOM } from '../../core/dom';

export class RootComponent {
  private readonly element: DOM;
  public components: Array<typeof Component>;
  public componentInstances: Array<Component>;
  constructor(selector: string, options: RootComponentOptionsTypes) {
    this.element = $(selector);
    this.components = options.components || [];
    this.componentInstances = [];
  }
  public getRoot(): DOM {
    const root = $.create('div', 'smart-table');
    this.componentInstances = this.components.map(Component => {
      const element = $.create('div', Component.className);
      const component = new Component(element);
      element.html(component.toHTML())
      if (element.getElement) {
        root.append(element);
      }
      return component;
    });
    return root;
  }
  public render(): void {
    if (Boolean(this.getRoot()) && this.element) {
      this.element.append(this.getRoot());
      this.componentInstances.forEach(instance => instance.init());
    }
  }
}

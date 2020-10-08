import { DOMListener } from '../dom-listener';
import { DOM } from '../dom';
import { OptionsTypes } from './component.types';

export class Component extends DOMListener {
  public static className: string;

  constructor(root: DOM, options: OptionsTypes = {}) {
    super(root, options.listeners);
  }

  public toHTML(): string {
    return '';
  }

  init(): void {
    this.initDOMListeners();
  }
}

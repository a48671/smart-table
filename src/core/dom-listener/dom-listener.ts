import { DOM } from '../dom';
import { capitalize } from '../utils';
import { TEventHandler } from './dom-listner.types';

export class DOMListener {
  private root: DOM;
  private listeners: Array<string>;
  constructor(root: DOM, listeners?: Array<string>) {
    if (!root) {
      throw new Error('No root provided for DOMListener');
    }
    this.root = root;
    this.listeners = listeners || [];
  }

  initDOMListeners(): void {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (this[method as keyof this]) {
        const handler: unknown = this[method as keyof this];
        this.root.on(listener, handler as TEventHandler);
      }
    })
  }
  // removeDOMListener(): void {
  //
  // }
}

function getMethodName(methodName: string): string {
  return 'on' + capitalize(methodName);
}

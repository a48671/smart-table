import { DOMListener } from '../dom-listener';

export class Component extends DOMListener {
  public static className: string;
  public toHTML(): string {
    return '';
  }
}

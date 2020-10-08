import { Component } from '../../core/component';
import { DOM } from '../../core/dom';
import { TEventHandler } from '../../core/dom-listener/dom-listner.types';

export class Formula extends Component {
  public static className = 'smart-table__formula';

  constructor(root: DOM) {
    super(root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput: TEventHandler = (event) => {
    console.log(event);
  }
}

import { Component } from '../../core/component';

export class Formula extends Component {
  public static className = 'smart-table__formula';
  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}

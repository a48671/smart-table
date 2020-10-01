import { Component } from '../../core/component';

export class Header extends Component {
  public static className = 'smart-table__header';
  toHTML(): string {
    return `
      <input type="text" class="input" value="New table">
      <div>
        <div class="button">
          <i class="material-icons">delete</i>
        </div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}

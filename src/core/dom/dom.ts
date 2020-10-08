export class DOM {
  private element?: Element | null;
  constructor(selector: string | Element) {
    if (typeof selector === 'string') {
      this.element = document.querySelector(selector);
    }
    if (typeof selector === 'object') {
      this.element = selector;
    }
  }
  html(html?: string): string | DOM {
    if (html && this.element) {
      this.element.innerHTML = html;
      return this;
    }
    return this.element?.outerHTML.trim() || '';
  }
  clear(): DOM {
    this.html('');
    return this;
  }
  on(eventType: string, callback: (event: Event) => void) {
    this.element?.addEventListener(eventType, callback);
  }
  append(element?: DOM | Element | null): DOM {
    if (element instanceof DOM) element = element.getElement;
    if (element && this.element instanceof Element) {
      this.element.append(element);
    }
    return this;
  }
  get getElement(): Element | undefined | null {
    return this.element;
  }
}

export function $(selector: string | Element): DOM {
  return new DOM(selector);
}

$.create = (tagName: string, classes: string): DOM => {
  const element = document.createElement(tagName);
  if (classes) element.classList.add(classes);
  return $(element);
}

class DOM {
}

export function $(): DOM {
  return new DOM();
}

$.create = (tagName: string, classes: string): Element => {
  const element = document.createElement(tagName);
  if (classes) element.classList.add(classes);
  return element;
}

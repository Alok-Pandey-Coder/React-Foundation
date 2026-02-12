function customRender (reactElement, mainContainer) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;

  for(const prop in reactElement.props) {
    if(prop === 'children') continue;
    element.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(element);
}

const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)
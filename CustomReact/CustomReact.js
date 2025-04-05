function customRender(reactElement, container) {
    
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    if (reactElement.props) {
        for (let prop in reactElement.props) {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google'
};

const rootContainer = document.getElementById("root");

customRender(reactElement, rootContainer);

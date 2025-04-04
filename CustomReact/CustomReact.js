function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Correct attribute name and content
    domElement.innerHTML = reactElement.children;

    // Add props if they exist
    if (reactElement.props) {
        for (let prop in reactElement.props) {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}

// Your mock React element
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google'
};

// Use a different variable name to avoid overwriting the function
const rootContainer = document.getElementById("root");

// Call your custom render function
customRender(reactElement, rootContainer);

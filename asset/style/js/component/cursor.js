function createCursor() {
    return `
           <div id="cursor"></div>
           <div id="cursor2""></div>
        `;
}

document.querySelectorAll('custom-cursor').forEach(el => el.outerHTML = createCursor());

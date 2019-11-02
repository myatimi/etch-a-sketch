let container = document.querySelector('#mainContainer');
let gridContainer = document.createElement('div');

document.addEventListener('DOMContentLoaded', function() {
    gridContainer.classList.add('gridContainer');
    appendItem(gridContainer, 16);
    container.appendChild(gridContainer);
}, false);

function resetGrid() {
    // prompt user input
    let input = prompt(" Enter number of square per side:", 16);

    // validate input

    // generate new grid
    gridContainer.style.gridTemplateColumns = `repeat( ${input}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    // delete grid child
    while (gridContainer.lastChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // reappend new grid item    
    appendItem(gridContainer, input);

}

function appendItem(parentContainer, sides = 16) {
    let totalItem = sides * sides;
    let tens = 255;
    for (let i = 0; i < totalItem; i++) {
        let tempGridItem = document.createElement('div');
        tempGridItem.classList.add('gridItemCss');
        tempGridItem.addEventListener('mouseenter', function(e) {
            //let hslColor = `hsl(${i}, 100% , 50%)`;
            tens = tens < 0 ? 255 : tens - 25;
            let r = Math.random(0, 255);
            let g = Math.random(0, 255);
            let rgbColor = `rgb(${r}, ${g}, ${tens})`;
            e.target.style.backgroundColor = rgbColor;
            e.target.textContent = `${i+1}`;
        })
        parentContainer.appendChild(tempGridItem);
    }
}
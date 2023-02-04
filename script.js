
makeGrid(16);
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearGrid);
const sizeSlider = document.querySelector(".slider");
sizeSlider.addEventListener('change', changeGridSize);


function changeGridSize (e) {
    const newSize = e.target.value;
    const valueText = document.querySelector(".value");
    valueText.textContent = newSize;
    destroyGrid();
    makeGrid(newSize);
}


function getColor() {
    const colorPicker = document.querySelector(".color-selector");
    return colorPicker.value;
}

function colorSquare (e) {
    const square = e.target;
    const color = getColor();
    square.style.backgroundColor = color;

}

function makeGrid (size) {
    const grid = document.querySelector('.drawing-grid');
    for(let row = 0; row < size; row++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        grid.appendChild(newRow);
        for(let col = 0; col < size; col++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('grid-square');
            newSquare.addEventListener('mouseover', colorSquare)
            newRow.appendChild(newSquare);
        }
    }
}

function destroyGrid () {
    const grid = document.querySelector('.drawing-grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function clearGrid () {
    const grid = document.querySelector('.drawing-grid');
    const rows = grid.childNodes;
    for(let row = 0; row < rows.length; row++) {
        const squares = rows[row].childNodes;
        for(let col = 0; col < squares.length; col++) {
            squares[col].style.backgroundColor = "#FFFFFF";
        }
    }
}
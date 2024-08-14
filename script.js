const container = document.querySelector('.container');
const gridSizeInput = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clear-btn');

let currentColor = colorPicker.value;

// Function to create the grid
function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';

    // Create a new grid element
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create grid cells
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = currentColor; // Change the color on hover
        });
        grid.appendChild(gridItem);
    }

    container.appendChild(grid);
}

// Function to clear the grid
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid div');
    gridItems.forEach(item => item.style.backgroundColor = '#ddd');
}

// Event listeners
gridSizeInput.addEventListener('input', () => {
    createGrid(gridSizeInput.value);
});

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
});

clearButton.addEventListener('click', clearGrid);

// Initialize the grid with default size
createGrid(16);

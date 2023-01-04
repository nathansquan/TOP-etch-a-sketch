// Want 16 x 16 grid
// create 16 containers with 16 grid cells each
// select container div

const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const colContainer = document.createElement('div');
    colContainer.setAttribute('class', 'col-container');
    colContainer.setAttribute('id', `col-container-${i}`);
    container.appendChild(colContainer);

    for (let j = 0; j < 16; j++) {
        const gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');
        gridCell.setAttribute('id', `grid-cell-${j}`);
        colContainer.appendChild(gridCell);
    }
}

// hover effect so that grid divs change color when mouse passes over them
const gridCells = document.querySelectorAll('.grid-cell');

gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'black');
});

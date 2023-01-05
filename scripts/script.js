// Want 16 x 16 grid
// create 16 containers with 16 grid cells each
// select container div

const container = document.querySelector('.container');

function createGrid(dim) {
    for (let i = 0; i < dim; i++) {
        const colContainer = document.createElement('div');
        colContainer.setAttribute('class', 'col-container');
        colContainer.setAttribute('id', `col-container-${i}`);
        container.appendChild(colContainer);

        for (let j = 0; j < dim; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('class', 'grid-cell');
            gridCell.setAttribute('id', `grid-cell-${j}`);
            colContainer.appendChild(gridCell);
        }
    }
}

// default to 16x16
const dim = 16;
createGrid(dim);

// hover effect so that grid divs change color when mouse passes over them
const gridCells = document.querySelectorAll('.grid-cell');

gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'black');
});

// button to prompt user to enter dimension of new grid
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // find number of child nodes in colContainer
    const nColContainers = container.children.length;
    console.log(nColContainers);

    const inputStr = prompt("Enter the number of squares per side for the new grid");
    const input = Number(inputStr);
    console.log(input);

    if (input > 100) {
        alert("Number of squares per side must be 100 or less");
    } else {
        for (let i = 0; i < nColContainers; i++) {
            // remove colContainers
            const colContainerId = document.querySelector(`#col-container-${i}`);
            container.removeChild(colContainerId);
        }
        // create new grid based on input
        createGrid(input);
        // must add mouseenter event listener after creating a new grid
        // hover effect so that grid divs change color when mouse passes over them
        const gridCells = document.querySelectorAll('.grid-cell');

        gridCells.forEach((gridCell) => {
            gridCell.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'black');
        });
    }
});



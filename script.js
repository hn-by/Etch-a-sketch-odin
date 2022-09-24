function makeGrid(x) {
    let container = document.querySelector('.container');
    let cell = document.createElement('div');
    let cellWidth = '500px';
    cell.style.width = cellWidth;
    cell.style.height = cellWidth;

    for (let i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < x; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            column.style.width = `${(parseInt(cellWidth) / x)}px`;
            column.style.height = `${(parseInt(cellWidth) / x)}px`;
            row.appendChild(column);

            column.addEventListener('mouseover', e => {
                column.style.backgroundColor = 'blue';
            })

        }
        cell.appendChild(row);

    }

    if (container.innerHTML == '') {
        container.appendChild(cell);
    } else {
        container.removeChild(container.firstChild);
        container.appendChild(cell);
    }

}

let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', e => {
    let value = parseInt(input.value);
    if (value < 100) {
        makeGrid(value);
    } else if (input.value == '') {
        makeGrid(16);
    }
})


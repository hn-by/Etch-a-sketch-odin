function makeGrid(x) {
    let container = document.querySelector('.container');
    let cell = document.createElement('div');
    for (let i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < x; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
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
    console.log(value)
    if (value < 100) {
        makeGrid(value);
    }
})


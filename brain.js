const grid = document.getElementById("grid");
const size_btn = document.querySelector(".grid-size")
const input = document.querySelector(".input")
const black_btn = document.querySelector(".black")
const random_btn = document.querySelector(".random")
const erasor_btn = document.querySelector(".erasor")
const reset_btn = document.querySelector(".reset")
inputSize = 1;
let color = 0; // zero is for black, one is for random and two is for eraser

const randomColor = function () {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

random_btn.addEventListener('click', function(evnet){
    color = 1;
})

black_btn.addEventListener('click', function(evnet){
    color = 0;
})

erasor_btn.addEventListener('click', function(evnet){
    color = 2;
})

reset_btn.addEventListener('click', function(evnet){
    clear()
})

size_btn.addEventListener('click', function(evnet){
    inputSize = input.value
    if (inputSize > 100){
        console.log("Can't be a number over 100!")
    }
    else {
    console.log("Grid size: "+ inputSize)
    input.value = null
    clear()
    run()
    }
})




const clear = function(){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}




const run  = function(){
    for (let i = 0; i < inputSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.backgroundColor = 'white';
        grid.appendChild(row);
        for (let j = 0; j < inputSize; j++) {
            const column = document.createElement('div');
            column.style.backgroundColor = 'white'  ;
            column.classList.add('column');
            row.appendChild(column);
        }
    
    }
    
    const pixels = Array.from(document.querySelectorAll('.column'))
    pixels.forEach(pixel => pixel.addEventListener('mouseenter', function(evnet){
        if (color==0){
            evnet.target.style.backgroundColor = 'black'
        }
        if(color==1){
            evnet.target.style.backgroundColor = randomColor()
        }
        if(color==2){
            evnet.target.style.backgroundColor = 'white'
        }
    }))
}
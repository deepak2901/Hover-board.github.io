const container = document.getElementById('container');
const colors = ['#e74c3c' , '#8e44ad' , '#3498db' , '#e67e22' , '#2ecc71']
const squares = 540;

for(let i = 0; i < squares; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover',()=> setColor(square));
    
    square.addEventListener('mouseout',()=>removeColor(square));
    
    container.appendChild(square)
}

const setColor = (square) => {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = '0 0 2px ${color} , 0 0 10px ${color}'
}   

const removeColor = (square) => {
    square.style.background = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000 0 0 10px ${color}';
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random()* colors.length)]
}
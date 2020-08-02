const colorFrx = document.querySelector('.colorFrx');
const bodyBcg = document.querySelector('body');

const colors = ['blue','red','green','yellow','white'];

colorFrx.addEventListener('click',changeColor);

function changeColor(){
    // bodyBcg.style.backgroundColor =colors[3]
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random]
}
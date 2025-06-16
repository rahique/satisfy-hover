let body = document.querySelector('body');
let letter = prompt('Type the letter you want to play with : ', '|');

let i = 0;
for (i; i !== 1500; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerText = letter;
    newDiv.style.paddingTop = '10px';
    newDiv.style.color = '#333333';
    newDiv.addEventListener('mouseover', (e) => {
        newDiv.style.transition = '233ms ease-in';
        newDiv.style.transform = 'rotate(180deg)';
        newDiv.style.color = '#e63946';
        newDiv.style.textShadow = '0px 0px 32px #e63946';
        setInterval(() => {
            e.target.style.transition = '500ms ease-out';
            e.target.style.transform = 'rotate(360deg)';
            newDiv.style.color = '#333333';
            newDiv.style.textShadow = 'none';
        }, 1500);
    });
    body.appendChild(newDiv);
}

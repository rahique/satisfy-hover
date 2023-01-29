let body = document.querySelector("body");
let letter = prompt("Type the letter you want to play with : ", "|");

let i = 0;
for (i; i !== 5000; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = letter;
    newDiv.style.color = "#333333";
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.transition = "233ms ease-in";
        newDiv.style.transform = "rotate(180deg)";
        newDiv.style.color = "#e63946";
    });
    document.addEventListener("touchmove", () => {
        newDiv.style.transition = "233ms ease-in";
        newDiv.style.transform = "rotate(180deg)";
        newDiv.style.color = "#e63946";
    });
    body.appendChild(newDiv);
}

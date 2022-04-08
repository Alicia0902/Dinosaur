const dino = document.getElementById("dino");

function jump(){
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove("jump");
        }, 300);  
    }
}

let isAlive = setInterval(function() {
    
    let dinoTop = window.getComputedStyle(dino).getPropertyValue(top);


},10);
    

document.addEventListener("keydown", function (event) {
    jump();
});


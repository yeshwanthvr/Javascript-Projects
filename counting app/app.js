let num = document.getElementById("num");
let b1 = document.getElementById("inc");
let b2 = document.getElementById("dec");
let entrEl = document.getElementById("entr-el");
let save = document.getElementById("save");
let n = 0;

b1.addEventListener("click" , () => {
    n++;
    num.innerText = n;
})

b2.addEventListener("click" , () => {
    n--;
    num.innerText = n;
})

save.addEventListener("click" , () => {
    entrEl.innerHTML += n+ " , ";
    num.innerText = 0;
    n = 0;
})
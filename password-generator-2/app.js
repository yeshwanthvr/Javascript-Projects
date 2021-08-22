let display = document.getElementById("display");
let length = document.getElementById("length");
let Upper = document.getElementById("Upper");
let Lower = document.getElementById("Lower");
let Num = document.getElementById("Num");
let Sym = document.getElementById("Sym");
let generate = document.getElementById("generate");

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = "@^&(){}[];':?/";

generate.addEventListener('click' , () => {
    if(length.value <= 0) alert("Password length cannot be negative");
    else if(length.value > 50) alert("Password maximum length is 50 characters");
    else {
        let char = "";
        Upper.checked ? (char += upper) : "";
        Lower.checked ? (char += lower) : "";
        Num.checked ? (char += num) : "";
        Sym.checked ? (char += sym) : "";
        display.innerHTML = generatePassword(length.value , char);
    }
});

function generatePassword(length , characters)
{
    let password = "";
    for(var i = 0; i < length; i++)
    {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
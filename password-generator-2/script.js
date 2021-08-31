let display = document.getElementById("display");
let length = document.getElementById("length");
let Upper = document.getElementById("Upper");
let Lower = document.getElementById("Lower");
let Num = document.getElementById("Num");
let Sym = document.getElementById("Sym");
let generate = document.getElementById("generate");
let pwdlen = document.getElementById("pwdlen");

pwdlen.innerText = length.value;
length.oninput = function() {
    pwdlen.innerText = this.value;
}
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "123456789";
let sym = "!#$%&'()@+-;<[=]>_{}";

generate.addEventListener('click' , () => {
    if(length.value > 50) alert("Password maximum length is 64 characters");
    else {
        let char = "";
        Upper.checked ? (char += upper) : "";
        Lower.checked ? (char += lower) : "";
        Num.checked ? (char += num) : "";
        Sym.checked ? (char += sym) : "";
        display.innerText = generatePassword(length.value , char);
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
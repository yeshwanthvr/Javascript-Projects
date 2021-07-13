let d = document.getElementById("display");
let b = document.getElementById("b1");
let n = document.getElementById("num");
let dn;

b.addEventListener('click' , () => {
    if(parseInt(n.value) <= 0)
    {
        confirm("Number must not be less than 0 !!!!!");
    }
    else if(isNaN(parseInt(n.value)))
    {
        confirm("Fill up the field given to you please !!!!!")
    }
    else
    {
        for(let i = 1; i <= 10; i++)
        {
            dn = (parseInt(n.value)) * i;
            d.innerHTML += (parseInt(n.value))+ " * " +i+ " = " +dn+ "<br>";
        }
    }
})
let a1 = document.getElementById("abs1");
let o1 = document.getElementById("ord1");
let a2 = document.getElementById("abs2");
let o2 = document.getElementById("ord2");
let x1;
let y1;
let x2;
let y2;
let ans;

function sub()
{
    x1 = parseInt(a1.value);
    y1 = parseInt(o1.value);
    x2 = parseInt(a2.value);
    y2 = parseInt(o2.value);
    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2))
    {
        alert("Fill up all the fields");
    }
    else
    {
        document.getElementById("show").style.display = "";
        ans = Math.sqrt(Math.pow((x1 - x2) , 2) + Math.pow((y1 - y2) , 2));
        document.getElementById("show").innerHTML = "The distance between (" +x1+ " , " +y1+ ") and (" +x2+ " , " +y2+ ") is " +ans.toFixed(2)+ " units";
    }
}
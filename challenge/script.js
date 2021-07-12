// Challenge 1
let d1 = document.getElementById("disp1");
let s1;
let ns1;
let b;
let count = 0;

function calc1()
{
    s1 = prompt("Enter a sentence : ");
    ns1 = parseInt(s1);
    if(ns1 > 0)
    {
        confirm("Invalid input !!!!!");
    }
    if(ns1 <= 0)
    {
        confirm("Invalid input !!!!!");
    }
    else
    {
        s1 += " ";
        for(var i = 0; i < s1.length; i++)
        {
            b = s1.charAt(i);
            if(b == " ")
            {
                count++;
            }
        }
        d1.innerHTML += "There are " +count+ " words in the sentence , <br>\"" +s1+ "\"";
    }
}

// Challenge 2
let d2 = document.getElementById("disp2");
let ask;
let ans;
function calc2() 
{
    ask = prompt("Enter a number : ");
    if(ask > 0)
    {
        ans = (ask ** (1.0 / 2.0));
        d2.innerHTML = "√" +ask+ " = " +ans.toFixed(3);
    }
    else
    {
        confirm("Invalid input !!!!!");
    }
}

// Challenge 3
let d3 = document.getElementById("disp3");
let ask1;
let ans1;
function calc3() 
{
    ask1 = prompt("Enter a number : ");
    if(ask1 > 0)
    {
        ans1 = (ask1 ** (1.0 / 3.0));
        d3.innerHTML = "∛" +ask1+ " = " +ans1.toFixed(3);
    }
    else
    {
        confirm("Invalid input !!!!!");
    }
}
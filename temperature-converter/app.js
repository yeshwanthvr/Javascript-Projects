let rec = document.getElementById("rec");
let ans1;
let ans2;

function calc()
{
    if (parseInt(rec.value) == 0)
    {
        ans1 = ((parseInt(rec.value)) * 1.8) + 32;
        ans2 = ((parseInt(rec.value)) + 273);
        document.getElementById("card-1").style.display = "";
        document.getElementById("card-2").style.display = "";
        document.getElementById("card-1").innerHTML = parseInt(rec.value)+ "℃ = " +ans1.toFixed(2)+ "℉";
        document.getElementById("card-2").innerHTML = parseInt(rec.value)+ "℃ = " +ans2+ "K";
    }
    else
    {
        ans1 = ((parseInt(rec.value)) * 1.8) + 32;
        ans2 = ((parseInt(rec.value)) + 273);
        document.getElementById("card-1").style.display = "";
        document.getElementById("card-2").style.display = "";
        document.getElementById("card-1").innerHTML = parseInt(rec.value)+ "℃ = " +ans1.toFixed(2)+ "℉";
        document.getElementById("card-2").innerHTML = parseInt(rec.value)+ "℃ = " +ans2+ "K";
    }
}
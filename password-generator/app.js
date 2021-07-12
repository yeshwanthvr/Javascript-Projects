function GeneratePassword()
{
    let ask = prompt("Enter the length of the password (40 characters max) : ");
    if(ask > 0 &&  ask <= 40)
    {
        let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!#$%^&(){}[]?"
        let pass = "";
        for(let i = 0; i < parseInt(ask); i++)
        {
            pass += charSet[Math.floor(Math.random() * charSet.length)];
        }
        document.getElementById("result").innerText = pass;
    }
    else
    {
        confirm("This app can generate passwords of 40 characters or less");
    }
}

function copy()
{
    let text = document.getElementById("result");
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    alert("Password Copied !!!!!")
}
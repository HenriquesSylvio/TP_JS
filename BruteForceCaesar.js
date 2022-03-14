function caesar()
{
    const test = "bafsuz"
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    currentCaracter = ""
    var message = ""

    for(let a = 1; a <= alphabet.length + 1; a++)
    {
        message = ""
        for(let i = 0; i <= test.length; i++)
        {
            message = message + String.fromCharCode(test.charAt(i).charCodeAt() + a);
        }   
        console.log(message);
    }
}

caesar()
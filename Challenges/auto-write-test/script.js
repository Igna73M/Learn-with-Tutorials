const text = "I'm an aspiring software engineer located in Kigali, the capital city of Rwanda👨‍💻.";


let index = 0;

function writeText ()
{
    document.body.innerText = text.slice(0, index);


    index++;


    if (index > text.length)
    {
        index = 0;
    }
}

setInterval(writeText, 100);
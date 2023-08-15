function hiddenBtn(element)
{
    let test = document.querySelector("#policy");
    test.style.display = "none";
}

let currentTemp = [24,18,27,19,21,16,26,21]
let spans = 
[
    document.querySelector("#redSpan"),
    document.querySelector("#blueSpan"),
    document.querySelector("#redSpan2"),
    document.querySelector("#blueSpan2"),
    document.querySelector("#redSpan3"),
    document.querySelector("#blueSpan3"),
    document.querySelector("#redSpan4"),
    document.querySelector("#blueSpan4")
]

function convert(element)
{
    let newTemp = [];
    console.log(element.value)
    if(element.value == "fahrenheit")
    {
        console.log('convert function: Fahrenheit')
        for(let i = 0; i < currentTemp.length; i++)
        {
            newTemp[i] = Math.round(currentTemp[i] * (9/5) + 32);
            spans[i].innerHTML = `${newTemp[i]}°`;   
        }
        
    }
    else if(element.value == "celsius")
    {
        console.log('convert function: Celsius')
        for(let i = 0; i < currentTemp.length; i++)
        {
            spans[i].innerHTML = `${currentTemp[i]}°`;   
        }
    }
}
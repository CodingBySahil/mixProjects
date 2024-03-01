// This will get the celsius value and store in c
let c = document.querySelector("#cel");
// This will get the fahrenheit value and store in f
let f = document.querySelector("#fah");
c.addEventListener("input",function(){
    c = this.value;
    f = (c * 9/5) + 32
    document.querySelector("#fah").value= f
})
f.addEventListener("input",function(){
    f = this.value;
    c = (f - 32) * 5/9
    document.querySelector("#cel").value= c
})

// code for words counter
let text = document.querySelector("#text");
text.addEventListener("input", function(){
    document.querySelector("#char").textContent = text.value.length;
    let wordsCount = text.value.trim();
    wordsCount = wordsCount.split(" ").filter(function(elm){
        return elm!=""
    })
    document.querySelector("#words").textContent = wordsCount.length
})

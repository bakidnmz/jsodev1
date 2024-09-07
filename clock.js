let getName = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
myName.innerHTML = getName

function showTime() {
    const d = new Date() 
    let text1 = d.toLocaleString('tr-TR', {dateStyle:'full'})
    let text2 = d.toLocaleTimeString('tr-TR') 
    document.getElementById("myClock").innerHTML = text1 + " " + text2; 
    
}
setInterval(showTime, 1000);
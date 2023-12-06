const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("ww1")
let password2 = document.getElementById("ww2")

function getRandomItem(array) {
    let i = Math.floor(Math.random() * array.length)
    return array[i]
}

function generatePasswords() {
    let passwordlength = document.getElementById("wwlength").value
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0; i < passwordlength; i++) {
        password1.textContent += getRandomItem(characters)
        password2.textContent += getRandomItem(characters)
    }
}
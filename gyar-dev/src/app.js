var termekek = ["alma", "körte", "barack", "szilva"]
const ul = document.querySelector("#ulElem")

termekek.forEach((termek)=>{
    let li= document.createElement("li")
    li.classList ="list-group-item bg-success"
    li.textContent = termek
    ul.append(li)
})
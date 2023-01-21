let pHome = document.getElementById("p-home")
let pGuest = document.getElementById("p-guest")

let home = 0
let guest = 0

function Plus1Home() {
    home += 1
    pHome.textContent = home
}

function Plus2Home() {
        home += 2
    pHome.textContent = home
}

function Plus3Home() {
        home += 3
    pHome.textContent = home
}

function Plus1Guest() {
    guest += 1
    pGuest.textContent = guest
}

function Plus2Guest() {
    guest += 2
    pGuest.textContent = guest
}

function Plus3Guest() {
    guest += 3
    pGuest.textContent = guest    
}
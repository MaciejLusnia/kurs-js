function dodaj(a, b) {
    return a + b
}

console.log(dodaj(3,4))

function odejmij(a, b) {
    return a - b
}

console.log(odejmij(10,4))

function pomnoz(a, b) {
    return a * b
}

console.log(pomnoz(2,2))

let zmienna = `odejmij`

switch(zmienna) {
    case "dodaj":
        console.log(dodaj(1,2))
        break;
    case "odejmij":
        console.log(odejmij(4,2))
        break;
    case "pomnoz":
        console.log(pomnoz(2,2))
        break;
}
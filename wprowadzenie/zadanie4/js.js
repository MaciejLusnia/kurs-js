var a = 1

var b = 5

if (a > b) {
    alert("A jest wieksze od B")
};

var c = `alicja`;

var d = `Krystyna`;

if (c.length > d.length) {
    window.alert(c.length);
} else (c.length < d.length); {
    window.alert(d.length);
}

var e = true;

var f = (e) ? `prawda` : `fałsz`
console.log("czy E jest prawdziwę", f)

var g = 8;  
 
switch (g) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("Jeden");
        break;
    case 2:
        console.log("Dwa");
        break;
    case 3:
        console.log("Trzy");
        break;
    case 4:
        console.log("Cztery");
        break;
     case 5:
        console.log("Pięć");
        break;
    case 6:
        console.log("Sześć");
        break;
    case 7:
        console.log("Siedem");
        break;
     case 8:
        console.log("Osiem");
        break;
    case 9:
        console.log("Dziewięć");
        break;
    case 10:
        console.log("Dzieśięć");
        break;
    default:
        console.log("Nie znana liczba")
        break;
};
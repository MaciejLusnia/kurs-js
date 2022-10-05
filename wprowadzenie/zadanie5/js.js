function uwaga() {
	alert('Uwaga');
}

uwaga();

function dodaj(a, b) {
	return a + b;
}

console.log(dodaj(1, 5));

for (let i = 1; i < 11; i++) {
	let x = dodaj(1, i++);
	console.log(i);
}

// let iterator = 1;
// while (iterator < 10) {
//     if (iterator === 5) {
//         break;
//     }
//     uwaga();
//     iterator++
// }

for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

let tablica = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [10, 11, 12]
];

for (let i = 0; i < tablica.length; i++) {
    for (let j = 0; j < tablica[i].length; j++) {
        console.log(`liczba na pozycji ` + i + ``  + j + ` to ` + tablica[i][j]);
    }
}

let pustaTablica = []
pustaTablica.push(1);

let person = {
	name: `Maciek`,
	LastName: `Luśnia`,
	age: `20`,
	birthday: `14/05/2002`,
	scream: uwaga(),
	numbers: [2, 4, 5],
};

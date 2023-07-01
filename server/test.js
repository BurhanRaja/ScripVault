let date = new Date().toLocaleDateString().split("/");

let curr = new Date().getTime();
let later = new Date(`${date[2]}-0${date[1]}-0${date[0]} 15:30:00`).getTime();

console.log(curr);
console.log(later);

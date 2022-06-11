let now = new Date();
console.log(now);

let year = now.getFullYear();
console.log(year);

let yearSpan = document.querySelector("#year");
console.log(yearSpan);

yearSpan.innerText = year;
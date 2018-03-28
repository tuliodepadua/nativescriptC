var numbers = [1,2,3,4,5,8];
console.log(numbers.filter((n)=> n>4));
numbers.reduce(((acum, current)=> acum + current), 10)
console.log(numbers.reduce(((acum, current) => acum + current), 10));
console.log(numbers.find(n=> n===3));
console.log('---------');

const[a,b,c,d,e, f=0] = numbers;

console.log(e);
console.log(f);

let [z, ...l] = numbers;
console.log(a,l);

[z, ...l] = [...l,z]

console.log(a, l);
// ... <--- Isso quer dizer todos os valores exceto o atual.
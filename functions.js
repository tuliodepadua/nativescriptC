var k = [];
k.f1 = (n, k) => ({ Teste: n - 1, t2: k + 1 })
k.f2 = (n,k) => {
    let z = n*k;
    return {Teste: z}
}
console.log(k.f1(50, 5));
console.log(k.f2(50, 5));
console.log(k);
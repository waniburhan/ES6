let a = [1,2,3];
let b = [...a,4,5];
console.log(b)
const ob = {
a: "hello"
}
const obj = {
...ob,
b:"world"
}
console.log(obj.a,obj.b);


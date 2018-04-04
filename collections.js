var map = new Map();
map.set(1,true);
console.log(map.has("1"));
map.set("1",true);
console.log(map.has("1"));
var roles = new Map();
roles.set('r1', 'User')
.set('r2', 'Guest')
.set('r3', 'Admin');
console.log(roles.has('r1'))
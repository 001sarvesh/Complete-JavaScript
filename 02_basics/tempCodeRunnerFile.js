const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, Obj1, Obj2);// correct way to combine
console.log(obj3)
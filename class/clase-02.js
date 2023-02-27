const juan = {
  name: "Juanito",
  age: 18,
  approvedCourse: ["Curso 1"],
  addCourse(newCourse){
    this.approvedCourse.push(newCourse);
  }
};

Object.defineProperty(juan, "pruebaNasa", {
  value: "extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false
});
Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true
});
Object.defineProperty(juan, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false,
  configurable: true
});
Object.defineProperty(juan, "terminal", {
  value: "WSL",
  enumerable: true,
  writable: true,
  configurable: false
});

Object.seal(juan); //No se pueden borrar (configurable: false)
Object.freeze(juan); //No se pueden borrar (configurable: false) ni editar (writable: false)

console.log(Object.getOwnPropertyDescriptors(juan));
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourse: ["Curso 1"],
  addCourse(newCourse){
    this.approvedCourse.push(newCourse);
  }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
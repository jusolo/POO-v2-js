function requiredParam(param){
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },
    readName() {
      return private._name;
    },
    changeName(newName) {
      private._name = newName;
    },
  };

  return public;
}

const juan = createStudent({
  name: "juanito",
  age: 18,
  email: "juanito@juanito.com",
  twitter: "juanitoDC"
});
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
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },
  };
}

const juan = createStudent({
  name: "juanito",
  age: 18,
  email: "juanito@juanito.com",
  twitter: "juanitoDC"
});
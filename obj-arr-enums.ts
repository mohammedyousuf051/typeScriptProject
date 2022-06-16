

enum Role  {ADMIN, AUTHOR}
const person = {
    'name':'tommy',
    'age':23,
    'hobbies' : ['reading','eating'],
    'roles': Role.AUTHOR
}

let names : string[];
names = ['dsfsf'];

console.log(person);

if (person.roles == Role.ADMIN){
    console.log("is admin")
}

for (const hobby of person.hobbies){
    console.log(hobby);
}
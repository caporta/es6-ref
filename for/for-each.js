'use strict';

let teachers = [
    { name: 'Chris', rating: 5 },
    { name: 'Sophie', rating: 5 },
    { name: 'Nick', rating: 1 },
    { name: 'Jeff', rating: 4 }
];

//teachers.forEach(teacher => {
    //console.log(teacher.name);
    //if (teacher.name === 'Nick') {
        //console.log(teacher.rating);
    //}
//});

for (let teacher of teachers) {
    console.log(teacher.name);
    if (teacher.name === 'Nick') {
        console.log(teacher.rating);
        break;
    }
}

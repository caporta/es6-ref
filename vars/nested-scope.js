'use strict';

(function () {

    const student = { name: 'James' };

    function createStudent(name) {
        let student = { name: name };
        return student;
    }

    console.log(createStudent('Ken'));
    console.log(student);

})();

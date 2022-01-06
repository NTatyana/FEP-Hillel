const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
    }
]

console.log(averageStudentMark(10));
console.log(averageGroupMark(students));



function averageStudentMark(id) {
    const student = students.find((item) => item.id === id);

    if (student) {
        let result = arrayAverage(student.marks);

        return result;
    }

    return null;
}

function averageGroupMark(students) {
    const marks = students.flatMap(({ marks }) => marks);

    return arrayAverage(marks);
}

function sum(mark1, mark2) {
    return mark1 + mark2;
}

function arrayAverage(array) {
    let grade = array.reduce(sum) / array.langth;
    
    return grade;
}


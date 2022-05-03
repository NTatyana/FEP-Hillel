import Student from "./Student.js";

class Group {
  #students = [];

  addStudent(student) {
    if(this.isStudent(student)) {
      this.#students.push(student);
    }
  }

  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    const marksAverageSum = this.getAverageMarksSum();

    return marksAverageSum / this.students.length;
  }

  getAverageMarksSum() {
    return this.students.reduce((acc, student) => acc + student.getAverageMark(), 0)
  }

  get students() {
    return this.#students;
  }
}

export default Group;
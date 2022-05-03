class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    const marksSum = this.getMarksSum();

    return marksSum / this.marks.length;
  }

  getMarksSum() {
    return this.marks.reduce((acc, mark) => acc + mark);
  }
}

export default Student;
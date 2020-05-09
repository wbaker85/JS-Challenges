"use strict";

class Garden {
  static DEFAULT_NAMES = [
    'Alice', 'Bob', 'Charlie', 'David',
    'Eve', 'Fred', 'Ginny', 'Harriet',
    'Ileana', 'Joseph', 'Kincaid', 'Larry'
  ];

  static PLANT_NAMES = {
    V: 'violets',
    R: 'radishes',
    C: 'clover',
    G: 'grass',
  }

  constructor(diagram, students = Garden.DEFAULT_NAMES) {
    this.students = students.sort();
    this.diagram = diagram;
    this.assignments = {};
    this.assignPlants();
    Object.assign(this, this.assignments);
  }

  assignPlants() {
    let rows = this.diagram.split('\n');
    let topRow = rows[0].match(/\w{2}/g);
    let bottomRow = rows[1].match(/\w{2}/g);

    this.students.forEach((student, idx) => {
      this.assignments[student.toLowerCase()] =
        String(topRow[idx] + bottomRow[idx])
          .split('')
          .map((char) => Garden.PLANT_NAMES[char]);
    });
  }
}

module.exports = Garden;

class Matrix {
  constructor(str) {
    this.input = str;
    this.rows = this.getRows();
    this.columns = this.getColumns();
    this.saddlePoints = [];

    this.populateSaddlePoints();
  }

  getRows() {
    return this.input.split('\n')
            .map((rowStr) => rowStr.trim())
            .map((row) => row.split(' ').map((char) => Number(char)));
  }

  getColumns() {
    return Array(this.rows[0].length).fill().map((_, colIdx) => {
      return Array(this.rows.length).fill().map((_, rowIdx) => {
        return this.rows[rowIdx][colIdx];
      });
    });
  }

  populateSaddlePoints() {
    this.rows.forEach((row, rowIdx) => {
      row.forEach((num, colIdx)  => {
        if (num === Math.max(...row)) {
          if (num === Math.min(...this.columns[colIdx])) {
            console.log(`Num: ${num}`);
            this.saddlePoints.push([rowIdx, colIdx]);
          }
        }
      });
    });
  }
}

module.exports = Matrix;
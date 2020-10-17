const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    if ( this.arr.length > 0 ) {
      this.arr.splice(0, this.arr.length);
    }
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {

    if ( (!isNaN(position)) && (position <= this.arr.length) && ( position > 0 ) && ( Math.ceil(position) === position ) ) {
      this.arr.splice( position - 1, 1);
    } else {
      this.arr.splice(0, this.arr.length);
      throw new Error('THROWN');
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr.splice(0, this.arr.length);
    return res;
  }
};

module.exports = chainMaker;

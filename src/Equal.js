class Equal {
  constructor(val1, val2) {
    this.val1 = val1
    this.val2 = val2
  }

  checkAssertion() {
    return this.val1 === this.val2
  }
}

module.exports = Equal

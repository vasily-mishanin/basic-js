const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",

  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.chain === "" ? 0 : this.chain.split("~~").length;
  },

  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    if (this.getLength() === 0) {
      this.chain += value === undefined ? "( )" : `( ${value} )`;
    } else if (this.getLength() > 0) {
      this.chain += value === undefined ? "~~( )" : `~~( ${value} )`;
    }
    return this;
  },

  removeLink(position) {
    //throw new NotImplementedError("Not implemented");
    let p = position;
    if (
      p <= 0 ||
      p > this.getLength() ||
      typeof p !== "number" ||
      !Number.isInteger(p)
    ) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }

    let links = this.chain.split("~~");
    links.splice(p - 1, 1);
    this.chain = links.join("~~");
    return this;
  },

  reverseChain() {
    //throw new NotImplementedError("Not implemented");
    let reversedChain = this.chain.split("~~").reverse().join("~~");
    this.chain = reversedChain;
    return this;
  },

  finishChain() {
    //throw new NotImplementedError("Not implemented");
    let product = this.chain;
    this.chain = "";
    return product;
  },
};

module.exports = {
  chainMaker,
};

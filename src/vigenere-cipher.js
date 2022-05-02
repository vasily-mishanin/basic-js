const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(option) {
    this.isDirectMachine =
      option === undefined || option === true ? true : false;
  }

  getKeyString(message, key) {
    return (
      key.toUpperCase().repeat(Math.ceil(message.length / key.length)) + key
    );
  }

  makeVigenereTable(givenAlphabet) {
    const shiftAlphabet = (alphabetArr) =>
      [alphabetArr.slice(1), ...alphabetArr.slice(0, 1)].join("");
    let originalAlphabet = givenAlphabet;
    let alphabet = originalAlphabet;
    let vigTable = new Object();
    for (let char of alphabet) {
      if (char === "A") {
        vigTable[char] = this.mapShiftedChars(originalAlphabet, alphabet);
      } else {
        alphabet = shiftAlphabet(alphabet);
        vigTable[char] = this.mapShiftedChars(originalAlphabet, alphabet);
      }
    }
    return vigTable;
  }

  mapShiftedChars(original, shifted) {
    let charMap = {};
    let i = 0;
    original.split("").forEach((char) => {
      charMap[char] = shifted[i];
      i++;
    });
    return charMap;
  }

  encrypt(message, key) {
    // throw new NotImplementedError("Not implemented");
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const VIG_TABLE = this.makeVigenereTable(ALPHABET);

    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    let encryptedMessage = "";
    let keyString = this.getKeyString(message, key);
    let keyLetterIndex = 0;
    let alphabetArr = ALPHABET.split("");
    for (let i = 0; i < message.length; i++) {
      let messageChar = message[i];
      let keywordChar = keyString[keyLetterIndex];
      if (alphabetArr.includes(messageChar)) {
        encryptedMessage += VIG_TABLE[keywordChar][messageChar];
        keyLetterIndex++;
      } else {
        encryptedMessage += messageChar;
      }
    }
    encryptedMessage = this.isDirectMachine
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError("Not implemented");

    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const VIG_TABLE = this.makeVigenereTable(ALPHABET);

    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    let decryptedMessage = "";
    let keyString = this.getKeyString(encryptedMessage, key);
    let keyLetterIndex = 0;
    let alphabetArr = ALPHABET.split("");
    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedMessageChar = encryptedMessage[i];
      let keywordChar = keyString[keyLetterIndex];
      if (alphabetArr.includes(encryptedMessageChar)) {
        for (let [original, shifted] of Object.entries(
          VIG_TABLE[keywordChar]
        )) {
          if (shifted === encryptedMessageChar) {
            decryptedMessage += original;
          }
        }
        keyLetterIndex++;
      } else {
        decryptedMessage += encryptedMessageChar;
      }
    }
    decryptedMessage = this.isDirectMachine
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

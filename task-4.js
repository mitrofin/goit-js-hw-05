class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value; // возвращает значкение _value
  }

  append(str) {
    this._value += str; // получает параметр str 'строку' и добавляет ее в конец _value
  }

  prepend(str) {
    this._value = str + this._value; // получает параметр str 'строку' и плюсуем ее в начало
  }

  pad(str) {
    this.prepend(str) + this.append(str); // получает строку и доб. ее в начало и конец _value
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

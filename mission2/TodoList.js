export default class TodoList {
  #state;
  #container;
  #element;
  constructor(container, initalState) {
    this.#state = initalState;
    this.#validate();
    this.#container = container;
    this.#element = document.createElement('div');
    this.#container.appendChild(this.#element);
    this.#render();
  }

  #validate() {
    if (this.#state === undefined || this.#state === null) throw new Error('데이터가 유효하지 않습니다.');
    if (!Array.isArray(this.#state)) throw new Error('데이터의 자료형이 배열이 아닙니다.');
    if (!this.#state.length || !this.#state.every((elem) => elem.text && typeof elem.text === 'string')) throw new Error('데이터에 text가 없거나 text의 타입이 올바르지 않습니다.');
  }

  setState(next) {
    this.#state = next;
    this.#validate(this.#state);
    this.#render();
  }

  #render() {
    this.#element.innerHTML = this.#state.map(({ text, isCompleted }) => `<div>${isCompleted ? `<s>${text}</s>` : text}</div>`).join('');
  }
}

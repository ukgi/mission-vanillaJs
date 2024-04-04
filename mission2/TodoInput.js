export default class TodoInput {
  #target;
  #element;
  constructor(target, onInput) {
    this.#target = target;
    this.#element = document.createElement('form');
    this.#element.innerHTML = `
    <input type='text'/>
    <button type='submit'>Add</button>
    `;
    this.#target.appendChild(this.#element);

    this.#element.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = this.#element.querySelector('input');
      const { value } = input;
      onInput(value);
      input.value = '';
      input.focus();
    });
  }
}

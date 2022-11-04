class Card extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("card-template").content;
    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define("custom-card", Card);

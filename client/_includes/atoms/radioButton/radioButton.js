class RadioButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("radio-button-template").content;

    const icon = template.querySelector(".icon");
    icon.src = `/image/icons/${this.getAttribute("icon")}.svg`;
    icon.alt = `Ícone representando ${this.getAttribute("alt")}`;

    const input = template.querySelector("input");
    input.id = this.getAttribute("identifier");
    input.value = this.getAttribute("value");
    input.name = this.getAttribute("form");
    input.checked = !!this.getAttribute("checked");

    const label = template.querySelector("label");
    label.htmlFor = this.getAttribute("identifier");

    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define("custom-radio-button", RadioButton);

customElements.define(
  "custom-anchor-with-icon",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = document.getElementById(
        "anchor-with-icon-template"
      ).content;

      const anchor = template.querySelector(".anchor");
      anchor.href = this.getAttribute("href") || "/";

      const icon = template.querySelector(".icon");
      icon.src = `/image/icons/${this.getAttribute("icon")}.svg`;
      icon.alt = `Ícone representando ${this.getAttribute("alt")}`;

      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);

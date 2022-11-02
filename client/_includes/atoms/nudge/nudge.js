customElements.define(
  "custom-nudge",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = document.getElementById("nudge-template").content;
      const anchor = template.querySelector(".anchor");
      anchor.href = this.getAttribute("href") || "/";

      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);

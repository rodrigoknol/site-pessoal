customElements.define(
  "custom-tag",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = document.getElementById("tag-template").content;
      const tag = template.querySelector(".tag");
      tag.className = `tag tag__${this.getAttribute("type")}`;
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);

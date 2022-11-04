class TabContent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("tab-content-template").content;

    const panel = template.querySelector(".tabs--panel");
    panel.id = this.getAttribute("identificator");

    const header = template.querySelector(".header__big");
    header.innerText = this.getAttribute("title");

    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define("custom-tab-content", TabContent);

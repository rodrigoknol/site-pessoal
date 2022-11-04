class AnchorWithIcon extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById(
      "anchor-with-icon-template"
    ).content;

    const anchor = template.querySelector(".anchor");
    const link = this.getAttribute("href");
    anchor.href = link || "/";
    anchor.target = !!link ? "_blank" : "_self";

    const icon = template.querySelector(".icon");
    icon.src = `/image/icons/${this.getAttribute("icon")}.svg`;
    icon.alt = `Ícone representando ${this.getAttribute("alt")}`;

    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define("custom-anchor-with-icon", AnchorWithIcon);

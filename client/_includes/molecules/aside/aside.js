class Aside extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("aside-template").content;

    const headings = [...document.getElementsByTagName("h2")].filter(
      (heading) => heading.innerText !== "Contato"
    );

    const navigator = template.querySelector("#navigation");
    const listEl = document.createElement("li");
    const anchorEl = document.createElement("a");

    headings.forEach((heading) => {
      const list = listEl.cloneNode(true);
      const anchor = anchorEl.cloneNode(true);
      const headTitle = heading.innerText;
      heading.id = encodeURI(headTitle);
      anchor.innerText = headTitle;
      anchor.href = `#${heading.id}`;

      list.appendChild(anchor);
      navigator.appendChild(list);
    });

    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define("custom-aside", Aside);

class Tab extends HTMLElement {
  constructor() {
    super();

    this.template = document.getElementById("tab-template").content;

    const form = this.template.querySelector("form");
    form.name = this.getAttribute("name");

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.template.cloneNode(true));

    this.tabs = [...this.querySelectorAll("custom-radio-button")].map((el) =>
      el.shadowRoot.querySelector("input")
    );
    this.panels = [...this.querySelectorAll("custom-tab-content")].map((el) =>
      el.shadowRoot.querySelector(".tabs--panel")
    );

    this.tabs.map((tab) => {
      tab.addEventListener("click", (e) => {
        this.openTab(e);
      });
    });

    this.openTab();
  }

  openTab(e) {
    const value = e?.target?.value || this.tabs[0].value;
    this.tabs.forEach((input) => (input.checked = value === input.value));
    this.panels.forEach((el) => {
      el.className = el.id === value ? "selected" : "tabs--panel";
    });
  }
}

customElements.define("custom-tab", Tab);

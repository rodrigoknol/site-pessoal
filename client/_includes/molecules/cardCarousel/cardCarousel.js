class CardCarousel extends Card {
  constructor() {
    super();

    const card = this.shadowRoot.querySelector(".card");
    card.className = `carousel__cell card card--with-image`;

    const template = document.getElementById("card-carousel-template").content;
    const title = template.querySelector(".header__big");
    title.innerText = this.getAttribute("title");

    const anchor = template.querySelector(".anchor");
    anchor.href = `/projeto/${this.getAttribute("link")}`;

    card.append(template.cloneNode(true));
  }
}

customElements.define("custom-card-carousel", CardCarousel);

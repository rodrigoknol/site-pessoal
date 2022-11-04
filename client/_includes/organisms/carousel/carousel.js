class Carousel extends HTMLElement {
  constructor() {
    super();
    this.selectedIndex = 0;
    this.cellSize = 0;
    this.template = document.getElementById("carousel-template").content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.template.cloneNode(true));
    this.carouselLogic();
    this.addLogicToButtons();

    const carouselParent = this.shadowRoot.querySelector(".carousel__parent");
    carouselParent.style.height = `${this.cellSize}px`;
  }

  addLogicToButtons() {
    const prevButton = this.shadowRoot.querySelector("#carouselPrevious");
    prevButton.addEventListener("click", () => {
      this.selectedIndex--;
      this.carouselLogic();
    });

    const nextButton = this.shadowRoot.querySelector("#carouselNext");
    nextButton.addEventListener("click", () => {
      this.selectedIndex++;
      this.carouselLogic();
    });
  }

  carouselLogic() {
    const cellsContainer = [...this.querySelectorAll("custom-card-carousel")];
    const cells = cellsContainer.map((el) =>
      el.shadowRoot.querySelector(".carousel__cell")
    );
    this.cellSize = cells.reduce(
      (size, cell) => Math.max(size, cell.offsetHeight),
      0
    );
    const cellCount = cells.length;
    const theta = 360 / cellCount;
    const radius = () => this.cellSize / 2 / Math.tan(Math.PI / cellCount);

    cells.forEach((cell, i) => {
      cell.style.height = `${this.cellSize}px`;
      cellsContainer[i].style.height = `${this.cellSize}px`;
      const cellAngle = theta * i;
      cellsContainer[
        i
      ].style.transform = `rotateX(${cellAngle}deg) translateZ(${radius()}px)`;
    });

    this.rotateCarousel(theta, radius);
  }

  rotateCarousel(theta, radius) {
    const carousel = this.shadowRoot.querySelector(".carousel");
    const angle = theta * Math.abs(this.selectedIndex);
    carousel.style.transform = `translateZ(${-radius()}px) rotateX(${angle}deg)`;
  }
}

customElements.define("custom-carousel", Carousel);

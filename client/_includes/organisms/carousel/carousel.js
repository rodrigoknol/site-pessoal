class Carousel extends HTMLElement {
  selectedIndex = 0;
  cellSize = 0;

  constructor() {
    super();
    this.template = document.getElementById("carousel-template").content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.template.cloneNode(true));

    this.cellsContainer = [...this.querySelectorAll("custom-card-carousel")];
    this.cells = this.cellsContainer.map((el) =>
      el.shadowRoot.querySelector(".carousel__cell")
    );
  }

  connectedCallback() {
    this.addLogicToButtons();
    this.setBaseHeight();
    this.carouselLogic();
    this.setParentHeight();
  }

  setBaseHeight() {
    this.cellSize = this.cells.reduce(
      (size, cell) => Math.max(size, cell.offsetHeight),
      0
    );
  }

  setParentHeight() {
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
    const cellCount = this.cells.length;
    const theta = 360 / cellCount;
    const radius = () => this.cellSize / 2 / Math.tan(Math.PI / cellCount);

    this.cells.forEach((cell, i) => {
      cell.style.height = `${this.cellSize}px`;
      this.cellsContainer[i].style.height = `${this.cellSize}px`;
      const cellAngle = theta * i;
      this.cellsContainer[
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

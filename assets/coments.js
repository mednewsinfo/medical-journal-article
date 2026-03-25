class GenerateComments {
  constructor(selectorId, obj) {
    this.$el = document.querySelector(selectorId);
    this.obj = obj;
    this.#form();
  }

  #firsComment() {
    /* Вспылвашка первого коммента */
    const firstitem = document.querySelector(`.comments__item[data-type="delayComent"]`);
    const hidden = firstitem.querySelectorAll(".hidden");
    const printing = firstitem.querySelector("[data-type='printing']");
    setTimeout(() => {
      hidden.forEach((element) => {
        element.classList.remove("hidden");
        firstitem.dataset.visibale = "true";
        printing.classList.add("hidden");
      });
    }, 3000);
  }

  #form() {
    try {
      const form = document.querySelector(".comments__form");
      const submit = form.querySelector(".commetns__form-btn");
      const inputName = form.querySelector(".comments__form-input[name='comentName']");
      const inputText = form.querySelector(".comments__form-input[name='comentText']");
      const addComent = document.querySelector(".comments__item[data-type='addComent']");
      const addComentName = addComent.querySelector(".comments__item-name");
      const addComentContent = addComent.querySelector(".comments__item-content");

      submit.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {
          name: inputName.value,
          text: inputText.value,
        };
        if (data.name && data.text !== "") {
          addComentName.textContent = data.name;
          addComentContent.textContent = data.text;
          addComent.dataset.visibale = "true";
          addComent.classList.remove("hidden");
          form.classList.add("hidden");
          setTimeout(() => {
            form.classList.add("none");
          }, 450);
        }

        if (data.name || data.text == "") {
          inputName.classList.add("error");
          inputText.classList.add("error");
        }
      });
    } catch (e) {}
  }

  watch(selector) {
    /* Код которые отслеживает появление элемента на странице
         нужен для встпывашки первого коммента. Принимает селектор для остлеживания
      */
    const el = document.querySelector(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting === true) {
          this.#firsComment();
        }
      });
    });
    observer.observe(el);
  }
}

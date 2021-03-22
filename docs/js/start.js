"use strict";

  const lenta = document.querySelector(".lenta");
  const closeListButton = lenta.querySelector(".close-lenta");
  const newsButton = document.querySelector(".new-news");
  const emptyLenta = document.querySelector(".empty-lenta");

  newsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    newsButton.classList.add("new-news--closed");
    window.counter.element.classList.add("news-counter--closed");
    lenta.classList.remove("lenta--closed");
    lenta.classList.add("lenta--opened");
    const closeButtons = lenta.querySelectorAll(".close-button");
    if (closeButtons.length==0) {
      cleanList();
    }
  })

  closeListButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    closeList();
    if (window.counter.element.textContent!=="0") {
      window.counter.element.classList.remove("news-counter--closed");
    }
  })

  const closeList = function () {
    newsButton.classList.remove("new-news--closed");
    lenta.classList.remove("lenta--opened");
    lenta.classList.add("lenta--closed");
  }

  const cleanList = function () {
    closeList();
    emptyLenta.classList.toggle("visually-hidden");
  }

  window.start = {
    closeList: closeList,
    cleanList: cleanList
  }

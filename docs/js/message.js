"use strict";

const newsList = document.querySelector(".feed__news");
const messageTemplateElement = document.querySelector("#message").content.querySelector(".feed__news-item");

const getMessage = (news) => {
  let messageElement = messageTemplateElement.cloneNode(true);
  const messageClose = messageElement.querySelector(".close-button");

  messageElement.querySelector(".feed__news-title").textContent = news.title;
  messageElement.querySelector(".feed__news-author").textContent = news.author;
  messageElement.querySelector(".feed__news-data").textContent = news.data;
  messageElement.querySelector(".feed__news-link").href = news.link;
  messageElement.querySelector(".feed__news-status").classList.add(news.status);

  messageClose.addEventListener("click", () => {
    messageElement.remove();
  });

  return messageElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < data.length; i++) {
  fragment.appendChild(getMessage(window.data[i]));
}

newsList.appendChild(fragment);

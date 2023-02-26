import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

galleryItems.forEach((i) => {
  const galleryItem = `<div class="gallery__item">
        <a class = "gallery__link" href = "${i.original}">
        <img class="gallery__image" src="${i.preview}" data-source="${i.original}" alt="${i.description}"/>
        </a></div>`;
  galleryDiv.insertAdjacentHTML("beforeend", galleryItem);
});

console.log(galleryItems);
